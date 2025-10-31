"use client"
import { useEffect } from "react"

interface HubSpotFormProps {
  portalId?: string
  formId?: string
}

export function HubSpotForm({ portalId = "244039200", formId = "f5d8b8e2-e4e6-4f50-8a57-7ee1ba42d4f0" }: HubSpotFormProps) {
  useEffect(() => {
    const scriptId = "hubspot-form-script"

    // Load HubSpot script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.src = "https://js-na2.hsforms.net/forms/embed/244039200.js"
      script.defer = true
      script.id = scriptId
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="hs-form-frame" data-region="na2" data-portal-id={portalId} data-form-id={formId}></div>
  )
}