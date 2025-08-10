import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQs() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      <AccordionItem value="item-1" >
        <AccordionTrigger className="text-base">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-base">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base">Is it styled?</AccordionTrigger>
        <AccordionContent className="text-base">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base">Is it animated?</AccordionTrigger>
        <AccordionContent className="text-base">
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-base">Is it styled?</AccordionTrigger>
        <AccordionContent className="text-base">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
