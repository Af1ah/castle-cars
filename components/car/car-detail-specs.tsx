import { Check, X, AlertCircle, FileText, Wrench, Shield } from "lucide-react"

interface CarDetailSpecsProps {
  optionalDetails?: {
    ownerHistory?: string
    serviceHistory?: string
    tyreCondition?: string
    modifications?: string[]
    condition?: string
    documentation?: string[]
    financing?: string
    insurance?: string
    additionalFeatures?: string[]
    inspectionReport?: string
    warrantyInfo?: string
    lastServiceDate?: string
    nextServiceDue?: string
  }
}

export function CarDetailSpecs({ optionalDetails }: CarDetailSpecsProps) {
  if (!optionalDetails) return null

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
        { label: "Owner History", value: optionalDetails.ownerHistory },
        { label: "Service History", value: optionalDetails.serviceHistory },
        { label: "Last Service", value: optionalDetails.lastServiceDate },
        { label: "Next Service Due", value: optionalDetails.nextServiceDue },
      ],
    },
    {
      title: "Condition & Maintenance",
      icon: Wrench,
      items: [
        { label: "Overall Condition", value: optionalDetails.condition },
        { label: "Tyre Condition", value: optionalDetails.tyreCondition },
        { label: "Inspection Report", value: optionalDetails.inspectionReport },
      ],
    },
    {
      title: "Documentation & Finance",
      icon: Shield,
      items: [
        { label: "Financing", value: optionalDetails.financing },
        { label: "Insurance", value: optionalDetails.insurance },
        { label: "Warranty", value: optionalDetails.warrantyInfo },
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

      {/* Documentation List */}
      {optionalDetails.documentation && optionalDetails.documentation.length > 0 && (
        <div className="bg-neutral-matteBlack rounded-xl p-6 border border-neutral-darkGray">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-5 w-5 text-primary-gold" />
            <h4 className="text-lg font-semibold text-white">Documentation</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {optionalDetails.documentation.map((doc, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-neutral-darkGray rounded-lg">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modifications & Upgrades */}
      {optionalDetails.modifications && optionalDetails.modifications.length > 0 && (
        <div className="bg-neutral-matteBlack rounded-xl p-6 border border-neutral-darkGray">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-5 w-5 text-primary-gold" />
            <h4 className="text-lg font-semibold text-white">Modifications & Upgrades</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {optionalDetails.modifications.map((mod, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-neutral-darkGray rounded-lg">
                <AlertCircle className="h-4 w-4 text-primary-gold" />
                <span className="text-white text-sm">{mod}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Features */}
      {optionalDetails.additionalFeatures && optionalDetails.additionalFeatures.length > 0 && (
        <div className="bg-neutral-matteBlack rounded-xl p-6 border border-neutral-darkGray">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary-gold" />
            <h4 className="text-lg font-semibold text-white">Additional Features</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {optionalDetails.additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-gold rounded-full" />
                <span className="text-neutral-silver text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
