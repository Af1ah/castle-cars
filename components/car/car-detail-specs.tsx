import { Check, X, AlertCircle, FileText, Wrench, Shield } from "lucide-react"
import { Car } from "@/types/car"

interface CarDetailSpecsProps {
  car: Car
}

export function CarDetailSpecs({ car }: CarDetailSpecsProps) {
  const getStatusIcon = (text: string) => {
    if (text.toLowerCase().includes("not available") || text.toLowerCase().includes("zero faults")) {
      return <X className="h-4 w-4 text-red-400" />
    }
    if (
      text.toLowerCase().includes("available") ||
      text.toLowerCase().includes("new") ||
      text.toLowerCase().includes("excellent")
    ) {
      return <Check className="h-4 w-4 text-green-400" />
    }
    return <AlertCircle className="h-4 w-4 text-primary-gold" />
  }

  const sections = [
    {
      title: "Ownership & History",
      icon: FileText,
      items: [
        { label: "Owner History", value: car.ownership },
        { label: "Insurance", value: car.insurance },
      ],
    },
    {
      title: "Condition & Maintenance",
      icon: Wrench,
      items: [
        { label: "Overall Condition", value: car.condition },
        { label: "Warranty", value: car.warranty },
      ],
    },
    {
      title: "Documentation & Finance",
      icon: Shield,
      items: [
        { label: "Financing", value: car.loan_available ? "Available" : "Not Available" },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white mb-6">Detailed Information</h3>

      {sections.map((section, sectionIndex) => {
        const hasContent = section.items.some((item) => item.value)
        if (!hasContent) return null

        return (
          <div key={sectionIndex} className="bg-neutral-matteBlack rounded-xl p-6 border border-neutral-darkGray">
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="h-5 w-5 text-primary-gold" />
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
            </div>

            <div className="space-y-3">
              {section.items.map((item, index) => {
                if (!item.value) return null

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-neutral-darkGray last:border-b-0"
                  >
                    <span className="text-neutral-silver text-sm">{item.label}</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.value)}
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
