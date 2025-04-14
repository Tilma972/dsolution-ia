// src/components/ContactForm.tsx
"use client";
import React, { useState, FormEvent } from 'react';
console.log("ContactForm CLIENT SCRIPT LOADED"); // Garde celui-ci

export default function ContactForm() {
  // ... (les useState peuvent rester pour l'instant) ...
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY; // Garde la vérification

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit STARTED! Attempting preventDefault..."); // LOG 1
    event.preventDefault(); // LA LIGNE LA PLUS IMPORTANTE
    console.log("preventDefault was called. No fetch attempted."); // LOG 2
    alert("Formulaire intercepté par JavaScript !"); // ALERTE VISIBLE

    // ----------- COMMENTE TOUT LE RESTE DE LA FONCTION -----------
    // setIsSubmitting(true);
    // setSubmissionStatus('idle');
    // setResultMessage('');
    // if (!accessKey) { ... }
    // const formData = new FormData(...);
    // formData.append(...);
    // try { ... fetch ... } catch { ... } finally { ... }
    // ------------------------------------------------------------
  };

  return (
    <div>
       {/* ... (le reste du JSX reste le même) ... */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... */}
      </form>
    </div>
  );
}