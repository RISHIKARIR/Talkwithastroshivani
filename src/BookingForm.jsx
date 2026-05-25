import { X, User, Phone, Sparkles, Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookingForm({
  isOpen,
  onClose,
  selectedService = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
  });
const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.whatsapp) {
    alert("Please enter your name and WhatsApp number.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        whatsapp: formData.whatsapp,
        selectedService: selectedService || "Not selected",
        subject: "New Consultation Booking Request",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      return;
    }

    alert("Thank you! We will contact you shortly.");

    setFormData({
      name: "",
      whatsapp: "",
    });

    onClose();
  } catch (error) {
    console.log(error);
    alert("Failed to submit request. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-yellow-400/20 bg-gradient-to-br from-[#2b0707] via-[#3b0909] to-[#160303] p-6 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-red-700/30 blur-3xl" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-red-950"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-red-950">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="text-3xl font-bold">Book Consultation</h2>

          <p className="mt-2 text-sm leading-6 text-white/70">
            Fill your details and our team will connect with you on WhatsApp.
          </p>

          {selectedService && (
            <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-white/10 px-4 py-3">
              <p className="text-xs text-yellow-200">Selected Service</p>
              <h3 className="mt-1 font-semibold text-white">
                {selectedService}
              </h3>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-yellow-100">
                Your Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <User className="h-5 w-5 text-yellow-300" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent text-white outline-none placeholder:text-white/45"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-yellow-100">
                WhatsApp Number
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <Phone className="h-5 w-5 text-yellow-300" />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Enter WhatsApp number"
                  className="w-full bg-transparent text-white outline-none placeholder:text-white/45"
                />
              </div>
            </div>

          <button
  type="submit"
  disabled={loading}
  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4 font-bold text-red-950 shadow-lg shadow-yellow-500/20 transition hover:-translate-y-1 hover:shadow-yellow-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
>
  {loading ? "Submitting..." : "Submit Request"}
  <Send className="h-5 w-5" />
</button>
          </form>
        </div>
      </div>
    </div>
  );
}