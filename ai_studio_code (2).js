"use client";
import { useForm, ValidationError } from '@formspree/react';

export default function ReservationForm() {
  const [state, handleSubmit] = useForm("mwvpgqzl");

  if (state.succeeded) {
    return (
      <div className="bg-white/5 p-10 rounded-2xl border border-ember/30 text-center">
        <h3 className="text-3xl font-serif text-white mb-4">Reservation Requested</h3>
        <p className="text-gray-400">We will contact you shortly to confirm your table.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-black/20 p-8 rounded-2xl border border-white/5">
      <input type="hidden" name="_subject" value="New Table Booking - El-Fuego" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-tighter text-ember">Full Name</label>
          <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-ember outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-tighter text-ember">Email</label>
          <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-ember outline-none" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-tighter text-ember">Date</label>
          <input name="date" type="date" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-tighter text-ember">Time</label>
          <input name="time" type="time" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-tighter text-ember">Guests</label>
          <input name="guests" type="number" defaultValue="2" className="w-full bg-white/5 border border-white/10 p-4 rounded text-white" />
        </div>
      </div>
      <button type="submit" disabled={state.submitting} className="w-full bg-ember py-5 rounded font-bold uppercase tracking-widest hover:bg-red-600 transition-all">
        {state.submitting ? "Processing..." : "Reserve My Experience"}
      </button>
    </form>
  );
}