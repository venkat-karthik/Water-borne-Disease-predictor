// Form validation and submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reportForm")
  const whatsappBtn = document.getElementById("whatsappBtn")

  // WhatsApp button functionality
  whatsappBtn.addEventListener("click", () => {
    // Replace with actual government helpline WhatsApp number
    const phoneNumber = "919876543210" // Example number
    const message = encodeURIComponent("Hello, I need assistance from the Government Health Helpline.")
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, "_blank")
  })

  // Form submission and validation
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Clear previous error messages
    clearErrors()

    // Get form data
    const formData = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      issueType: document.getElementById("issueType").value,
      message: document.getElementById("message").value.trim(),
    }

    // Validate form
    let isValid = true

    if (!formData.name) {
      showError("name", "Name is required")
      isValid = false
    }

    if (!formData.phone) {
      showError("phone", "Phone number is required")
      isValid = false
    } else if (!isValidPhone(formData.phone)) {
      showError("phone", "Please enter a valid phone number")
      isValid = false
    }

    if (!formData.issueType) {
      showError("issueType", "Please select an issue type")
      isValid = false
    }

    if (!formData.message) {
      showError("message", "Message is required")
      isValid = false
    } else if (formData.message.length < 10) {
      showError("message", "Message must be at least 10 characters long")
      isValid = false
    }

    if (isValid) {
      // Simulate form submission
      submitForm(formData)
    }
  })

  // Phone number validation
  function isValidPhone(phone) {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))
  }

  // Show error message
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId)
    field.classList.add("error")

    // Remove existing error message
    const existingError = field.parentNode.querySelector(".error-message")
    if (existingError) {
      existingError.remove()
    }

    // Add new error message
    const errorDiv = document.createElement("div")
    errorDiv.className = "error-message"
    errorDiv.textContent = message
    field.parentNode.appendChild(errorDiv)
  }

  // Clear all error messages
  function clearErrors() {
    const errorFields = document.querySelectorAll(".error")
    errorFields.forEach((field) => field.classList.remove("error"))

    const errorMessages = document.querySelectorAll(".error-message")
    errorMessages.forEach((msg) => msg.remove())
  }

  // Submit form (simulate submission)
  function submitForm(formData) {
    const submitBtn = document.querySelector(".submit-btn")
    const originalText = submitBtn.innerHTML

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'
    submitBtn.disabled = true

    // Simulate API call
    setTimeout(() => {
      // Show success message
      showSuccessMessage()

      // Reset form
      form.reset()

      // Reset button
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false

      // Log form data (in real implementation, send to server)
      console.log("Form submitted:", formData)
    }, 2000)
  }

  // Show success message
  function showSuccessMessage() {
    // Remove existing success message
    const existingSuccess = document.querySelector(".success-message")
    if (existingSuccess) {
      existingSuccess.remove()
    }

    // Create success message
    const successDiv = document.createElement("div")
    successDiv.className = "success-message"
    successDiv.style.display = "block"
    successDiv.innerHTML =
      '<i class="fas fa-check-circle"></i> Your report has been submitted successfully. We will contact you soon.'

    // Insert before form
    form.parentNode.insertBefore(successDiv, form)

    // Auto-hide after 5 seconds
    setTimeout(() => {
      successDiv.style.display = "none"
    }, 5000)
  }

  // Real-time validation
  const inputs = form.querySelectorAll("input, select, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.classList.contains("error")) {
        // Re-validate on blur if field was previously invalid
        const event = new Event("submit")
        form.dispatchEvent(event)
      }
    })

    input.addEventListener("input", function () {
      // Remove error styling when user starts typing
      if (this.classList.contains("error")) {
        this.classList.remove("error")
        const errorMsg = this.parentNode.querySelector(".error-message")
        if (errorMsg) {
          errorMsg.remove()
        }
      }
    })
  })
})

// Smooth scrolling for emergency cards (if needed for navigation)
document.querySelectorAll(".emergency-card").forEach((card) => {
  card.addEventListener("click", function () {
    const number = this.querySelector(".number").textContent
    if (confirm(`Do you want to call ${number}?`)) {
      window.location.href = `tel:${number}`
    }
  })
})

// Add loading animation for map
window.addEventListener("load", () => {
  const mapContainer = document.querySelector(".map-container")
  if (mapContainer) {
    mapContainer.style.opacity = "0"
    mapContainer.style.transition = "opacity 0.5s ease"

    setTimeout(() => {
      mapContainer.style.opacity = "1"
    }, 500)
  }
})
