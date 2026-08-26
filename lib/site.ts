export const site = {
  whatsappNumber: "553131420880",
  whatsappMessage: "Olá, Dra. Laís. Gostaria de saber mais sobre o atendimento.",
  crm: "", // Obrigatório antes da publicação: exemplo "CRM-MG 00000"
  rqePediatria: "", // Obrigatório para anunciar a especialidade: exemplo "RQE 00000"
} as const;
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
