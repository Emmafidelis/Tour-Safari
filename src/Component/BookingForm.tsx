"use client";
import { useForm as Form } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import {
  Button,
  Input,
  Select,
  Textarea,
  Field,
  Box,
  SimpleGrid,
  Portal,
  createListCollection,
  InputGroup,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  tourType?: string;
  participants: number;
  startDate: string;
  endDate: string;
  message?: string;
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Invalid phone number"),
  destination: z.string().optional(),
  tourType: z.string().optional(),
  participants: z.number().min(1, "Minimum 1 participant"),
  startDate: z.string().min(1, "Please select a start date"),
  endDate: z.string().min(1, "Please select an end date"),
  message: z.string().optional(),
});

const destinations = createListCollection({
  items: [
    { label: "Serengeti National Park", value: "serengeti" },
    { label: "Zanzibar Island", value: "zanzibar" },
    { label: "Mount Kilimanjaro", value: "kilimanjaro" },
    { label: "Ngorongoro Crater", value: "ngorongoro" },
    { label: "Tarangire National Park", value: "tarangire" },
    { label: "Lake Manyara", value: "manyara" },
  ],
});

const tourTypes = createListCollection({
  items: [
    { label: "Wildlife Safari", value: "safari" },
    { label: "Beach Holiday", value: "beach" },
    { label: "Mountain Climbing", value: "mountain" },
    { label: "Cultural Tour", value: "cultural" },
    { label: "Photography Tour", value: "photography" },
    { label: "Luxury Safari", value: "luxury" },
  ],
});

// Payment Section Component
const PaymentSection = ({
  showPayment,
  onClose,
  bookingData,
}: {
  showPayment: boolean;
  onClose: () => void;
  bookingData: FormData | null;
}) => {
  if (!showPayment) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="blackAlpha.600"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="1000"
      p={4}
    >
      <Box
        bg="white"
        borderRadius="lg"
        p={6}
        maxW="lg"
        w="full"
        maxH="90vh"
        overflowY="auto"
        position="relative"
        boxShadow="xl"
      >
        <Button
          position="absolute"
          top={4}
          right={4}
          variant="ghost"
          size="sm"
          onClick={onClose}
          color="gray.500"
          _hover={{ color: "gray.700" }}
        >
          ✕
        </Button>

        <VStack gap={4} align="stretch">
          <VStack align="start" gap={2}>
            <Heading size="md" color="gray.800">
              Complete Your Payment
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {bookingData?.destination && `${bookingData.destination} - `}
              {bookingData?.participants} participant(s)
            </Text>
          </VStack>

          <Text color="gray.700">
            Your booking request has been submitted successfully! To secure your
            safari adventure, please complete the payment below using our
            trusted partner Pesapal.
          </Text>

          <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
            bg="gray.50"
            textAlign="center"
          >
            <Text fontSize="sm" color="gray.600" mb={3}>
              Secure Payment via Pesapal
            </Text>
            <iframe
              width="200"
              height="40"
              src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/paymentforbooking"
              style={{
                border: "none",
                borderRadius: "4px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Box>

          <Box bg="blue.50" p={4} borderRadius="md">
            <Text fontSize="sm" color="blue.800">
              <strong>What happens next?</strong>
              <br />
              1. Complete payment through Pesapal
              <br />
              2. Receive payment confirmation via email
              <br />
              3. Our team will contact you within 24 hours
              <br />
              4. Finalize your safari itinerary and arrangements
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

const BookingForm = () => {
  const [state, handleFormspreeSubmit] = Form("xqaqlwnv");
  const [showPayment, setShowPayment] = useState(false);
  const [submittedBookingData, setSubmittedBookingData] =
    useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("🚀 Form submission started!");
    console.log("📝 Form data:", data);

    try {
      console.log("✅ Entering try block...");

      // Prepare email data with enhanced formatting for Formspree
      const emailData = {
        ...data,
        subject: `🌍 NEW BOOKING REQUEST - ${data.name}`,
        _replyto: data.email,
        _template: "table",
        message: `
BOOKING REQUEST DETAILS
========================

CUSTOMER INFORMATION:
• Full Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}

TRIP DETAILS:
• Destination: ${data.destination || "Not specified"}
• Tour Type: ${data.tourType || "Not specified"}
• Number of Participants: ${data.participants} people
• Start Date: ${data.startDate}
• End Date: ${data.endDate}

SPECIAL REQUESTS:
${data.message || "No special requests"}

========================
Submitted on: ${new Date().toLocaleString()}
From: Seven Serenity Safaris Website
        `,
      };

      // Submit to Formspree (this will send you an email notification)
      const formspreeResult = await handleFormspreeSubmit(emailData);
      console.log("Email notification sent successfully:", formspreeResult);

      // Show success message to user
      toaster.create({
        title: "Booking Request Submitted Successfully! ✅",
        description:
          "Thank you for your interest! We have received your booking request. Please complete your payment to secure your booking.",
        type: "success",
        duration: 6000,
      });

      // Store booking data and show payment section
      setSubmittedBookingData(data);
      setShowPayment(true);

      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Form submission error:", error);

      // Show error message to user
      toaster.create({
        title: "Submission Error",
        description:
          "There was an issue submitting your request. Please try again or contact us directly at info@sevenserenity.com or +255 679 728 749.",
        type: "error",
        duration: 10000,
      });
    }
  };

  return (
    <Box maxW="48rem" mx="auto" p={12} borderRadius="lg" bg="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Field.Root invalid={!!errors.name} mb={6}>
            <Field.Label color="blackAlpha.800">Full Name</Field.Label>
            <Input
              {...register("name")}
              placeholder="John Doe"
              color="gray.800"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "green.400" }}
              _focus={{
                borderColor: "green.500",
                boxShadow: "0 0 0 1px green.500",
              }}
            />
            <Field.ErrorText fontSize={15}>
              {errors.name?.message}
            </Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.email} mb={6}>
            <Field.Label color="blackAlpha.800">Email</Field.Label>
            <Input
              type="email"
              {...register("email")}
              placeholder="johndoe@example.com"
              color="gray.800"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "green.400" }}
              _focus={{
                borderColor: "green.500",
                boxShadow: "0 0 0 1px green.500",
              }}
            />
            <Field.ErrorText fontSize={15}>
              {errors.email?.message}
            </Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.phone} mb={6}>
            <Field.Label color="blackAlpha.800">Phone</Field.Label>
            <Input
              {...register("phone")}
              placeholder="+255 123 456 789"
              color="gray.800"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "green.400" }}
              _focus={{
                borderColor: "green.500",
                boxShadow: "0 0 0 1px green.500",
              }}
            />
            <Field.ErrorText fontSize={15}>
              {errors.phone?.message}
            </Field.ErrorText>
          </Field.Root>
          <Field.Root mb={8}>
            <Field.Label color="blackAlpha.800">Destination</Field.Label>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <Select.Root
                  key={field.value}
                  collection={destinations}
                  onValueChange={(details) => field.onChange(details.value[0])}
                  value={field.value ? [field.value] : []}
                >
                  <Select.Trigger
                    color="gray.800"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    _hover={{ borderColor: "green.400" }}
                    _focus={{
                      borderColor: "green.500",
                      boxShadow: "0 0 0 1px green.500",
                    }}
                  >
                    <Select.ValueText placeholder="Select destination" />
                  </Select.Trigger>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {destinations.items.map((destination) => (
                          <Select.Item
                            key={destination.value}
                            item={destination}
                          >
                            {destination.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              )}
            />
          </Field.Root>
        </SimpleGrid>
        <Field.Root mb={8}>
          <Field.Label color="blackAlpha.800">Tour Type</Field.Label>
          <Controller
            name="tourType"
            control={control}
            render={({ field }) => (
              <Select.Root
                key={field.value}
                collection={tourTypes}
                onValueChange={(details) => field.onChange(details.value[0])}
                value={field.value ? [field.value] : []}
              >
                <Select.Trigger
                  color="gray.800"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  _hover={{ borderColor: "green.400" }}
                  _focus={{
                    borderColor: "green.500",
                    boxShadow: "0 0 0 1px green.500",
                  }}
                >
                  <Select.ValueText placeholder="Select tour type" />
                </Select.Trigger>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {tourTypes.items.map((tourType) => (
                        <Select.Item key={tourType.value} item={tourType}>
                          {tourType.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />
        </Field.Root>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Field.Root invalid={!!errors.participants} mb={6}>
            <Field.Label color="blackAlpha.800">Participants</Field.Label>
            <Input
              type="number"
              {...register("participants", { valueAsNumber: true })}
              min={1}
              color="gray.800"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "green.400" }}
              _focus={{
                borderColor: "green.500",
                boxShadow: "0 0 0 1px green.500",
              }}
            />
            <Field.ErrorText fontSize={15}>
              {errors.participants?.message}
            </Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.startDate} mb={6}>
            <Field.Label color="blackAlpha.800">
              Start Date (DD/MM/YYYY)
            </Field.Label>
            <InputGroup>
              <Input
                type="date"
                {...register("startDate")}
                min={new Date().toISOString().split("T")[0]}
                color="gray.800"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                _hover={{ borderColor: "green.400" }}
                _focus={{
                  borderColor: "green.500",
                  boxShadow: "0 0 0 1px green.500",
                }}
                css={{
                  "&::-webkit-calendar-picker-indicator": {
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23059669'%3e%3cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
                    cursor: "pointer",
                  },
                }}
              />
            </InputGroup>
            <Field.ErrorText fontSize={15}>
              {errors.startDate?.message}
            </Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.endDate} mb={6}>
            <Field.Label color="blackAlpha.800">
              End Date (DD/MM/YYYY)
            </Field.Label>
            <InputGroup>
              <Input
                type="date"
                {...register("endDate")}
                min={new Date().toISOString().split("T")[0]}
                color="gray.800"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                _hover={{ borderColor: "green.400" }}
                _focus={{
                  borderColor: "green.500",
                  boxShadow: "0 0 0 1px green.500",
                }}
                css={{
                  "&::-webkit-calendar-picker-indicator": {
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23059669'%3e%3cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
                    cursor: "pointer",
                  },
                }}
              />
            </InputGroup>
            <Field.ErrorText fontSize={15}>
              {errors.endDate?.message}
            </Field.ErrorText>
          </Field.Root>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Field.Root>
            <Field.Label color="blackAlpha.800">Special Requests</Field.Label>
            <Textarea
              {...register("message")}
              placeholder="Dietary restrictions, accessibility needs, etc..."
              color="gray.800"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "green.400" }}
              _focus={{
                borderColor: "green.500",
                boxShadow: "0 0 0 1px green.500",
              }}
            />
          </Field.Root>
        </SimpleGrid>
        <Button
          type="submit"
          bg="green"
          w="full"
          loading={state.submitting}
          loadingText="Submitting Request..."
          color="gray.50"
          mt={4}
          _hover={{ bg: "green.600" }}
          _active={{ bg: "green.700" }}
          _focus={{ boxShadow: "outline" }}
        >
          Submit Booking Request
        </Button>
      </form>

      {/* Payment Section */}
      <PaymentSection
        showPayment={showPayment}
        onClose={() => setShowPayment(false)}
        bookingData={submittedBookingData}
      />
    </Box>
  );
};

export default BookingForm;
