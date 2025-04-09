// netlify/functions/submission-created.js
exports.handler = async function(event, context) {
    // Vous pouvez personnaliser le traitement des formulaires ici
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submission processed" })
    };
  };