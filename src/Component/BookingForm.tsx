"use client";
import { useForm as Form } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

const BookingForm = () => {
  const [state, handleFormspreeSubmit] = Form("xqaqlwnv");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form data being submitted:", data);

      // Submit to Formspree
      const formspreeResult = await handleFormspreeSubmit(data);
      console.log("Formspree submission result:", formspreeResult);

      // WhatsApp integration (always execute)
      const whatsappMessage = `New Booking Request:%0A%0A
        Name: ${data.name}%0A
        Email: ${data.email}%0A
        Phone: ${data.phone}%0A
        Destination: ${data.destination || "Not specified"}%0A
        Tour Type: ${data.tourType || "Not specified"}%0A
        Participants: ${data.participants}%0A
        Start Date: ${data.startDate}%0A
        End Date: ${data.endDate}%0A
        Message: ${data.message || "None"}`;

      window.open(
        `https://wa.me/255123456789?text=${encodeURIComponent(whatsappMessage)}`
      );

      toaster.create({
        title: "Request Sent Successfully!",
        description:
          "Your booking request has been submitted and sent via WhatsApp. We'll contact you within 24 hours.",
        type: "success",
        duration: 5000,
      });
    } catch (error) {
      console.error("Form submission error:", error);

      // Even if Formspree fails, still provide WhatsApp as backup
      const whatsappMessage = `New Booking Request:%0A%0A
        Name: ${data.name}%0A
        Email: ${data.email}%0A
        Phone: ${data.phone}%0A
        Destination: ${data.destination || "Not specified"}%0A
        Tour Type: ${data.tourType || "Not specified"}%0A
        Participants: ${data.participants}%0A
        Start Date: ${data.startDate}%0A
        End Date: ${data.endDate}%0A
        Message: ${data.message || "None"}`;

      window.open(
        `https://wa.me/255123456789?text=${encodeURIComponent(whatsappMessage)}`
      );

      toaster.create({
        title: "Request Sent via WhatsApp!",
        description:
          "Form submission had an issue, but your request was sent via WhatsApp. We'll contact you soon.",
        type: "success",
        duration: 5000,
      });
    }
  };

  return (
    <Box maxW="48rem" mx="auto" p={12} borderRadius="lg" bg="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spaceX={3}>
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
          <Field.Root mb={6}>
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
        <Field.Root mb={6}>
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
        <SimpleGrid columns={{ base: 1, md: 3 }} spaceX={2}>
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
            <Field.Label color="blackAlpha.800">Start Date</Field.Label>
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
            <Field.Label color="blackAlpha.800">End Date</Field.Label>
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spaceX={2}>
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
          loadingText="Submitting..."
          color="gray.50"
          mt={4}
          _hover={{ bg: "green.600" }}
          _active={{ bg: "green.700" }}
          _focus={{ boxShadow: "outline" }}
        >
          Submit Booking Request
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
