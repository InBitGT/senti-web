import LegalDocument, { Section } from "@/src/components/templates/LegalDocument/LegalDocument";
import type { Metadata } from "next";

const EMPRESA = "InBit GT";
const CORREO = "inbitgt@gmail.com";
const FECHA = "29 de septiembre de 2026";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de Privacidad de las aplicaciones de ${EMPRESA}.`,
};

const INTRO: string[] = [
  `Esta Política de Privacidad describe cómo ${EMPRESA} ("nosotros", "nuestro") recopila, usa, almacena y protege la información de los usuarios de esta aplicación móvil (la "Aplicación").`,
  "Al usar la Aplicación, usted acepta las prácticas descritas en esta Política de Privacidad.",
];

const SECTIONS: Section[] = [
  {
    title: "1. Información que recopilamos",
    blocks: [
      { type: "sub", text: "1.1 Información de cuenta" },
      { type: "p", text: "Cuando usted crea una cuenta, recopilamos:" },
      {
        type: "list",
        items: [
          "Nombre completo",
          "Correo electrónico",
          "Contraseña (almacenada de forma cifrada, nunca en texto plano)",
        ],
      },
      { type: "sub", text: "1.2 Información de ubicación" },
      {
        type: "p",
        text: "Con su consentimiento, recopilamos datos de ubicación de su dispositivo para brindar y mejorar las funciones del servicio. Puede desactivar el acceso a la ubicación en cualquier momento desde la configuración de su dispositivo.",
      },
      { type: "sub", text: "1.3 Notificaciones push" },
      {
        type: "p",
        text: "Recopilamos el token de notificación de su dispositivo para enviarle alertas relevantes sobre el uso del servicio. Puede desactivar las notificaciones desde la configuración de su dispositivo o dentro de la Aplicación.",
      },
      { type: "sub", text: "1.4 Información de pago" },
      {
        type: "p",
        text: "Cuando realiza una compra o transacción dentro de la Aplicación, la información de pago (tarjeta, cuenta, etc.) es procesada directamente por un proveedor de pagos externo. Nosotros no almacenamos los datos completos de su tarjeta en nuestros servidores.",
      },
      { type: "sub", text: "1.5 Información de uso" },
      { type: "p", text: "Recopilamos automáticamente cierta información técnica, como:" },
      {
        type: "list",
        items: [
          "Tipo de dispositivo y sistema operativo",
          "Identificadores de dispositivo",
          "Registros de uso y errores de la Aplicación (analítica)",
        ],
      },
    ],
  },
  {
    title: "2. Cómo usamos su información",
    blocks: [
      { type: "p", text: "Utilizamos la información recopilada para:" },
      {
        type: "list",
        items: [
          "Crear y administrar su cuenta",
          "Procesar transacciones y pagos",
          "Enviar notificaciones relevantes sobre el servicio",
          "Mejorar el funcionamiento, la seguridad y el rendimiento de la Aplicación",
          "Cumplir con obligaciones legales y prevenir fraude",
          "Brindar soporte al usuario",
        ],
      },
    ],
  },
  {
    title: "3. Con quién compartimos su información",
    blocks: [
      {
        type: "p",
        text: "No vendemos su información personal. Podemos compartir datos únicamente con:",
      },
      {
        type: "table",
        headers: ["Tercero", "Propósito", "Datos compartidos"],
        rows: [
          ["Proveedor de pagos", "Procesar transacciones", "Datos de pago, monto"],
          ["Proveedor de analítica", "Medir el uso y mejorar la app", "Datos de uso, identificadores de dispositivo"],
          ["Proveedor de notificaciones", "Enviar notificaciones push", "Token del dispositivo"],
          ["Autoridades legales", "Cuando la ley lo requiera", "Según corresponda"],
        ],
      },
      {
        type: "p",
        text: "Estos proveedores están obligados contractualmente a proteger su información y a usarla únicamente para el propósito acordado.",
      },
    ],
  },
  {
    title: "4. Almacenamiento y seguridad",
    blocks: [
      {
        type: "p",
        text: "Sus datos se almacenan en servidores seguros con medidas técnicas y organizativas para prevenir accesos no autorizados, pérdida o alteración de la información. Entre esas medidas están el cifrado de contraseñas y las conexiones seguras (HTTPS/TLS).",
      },
      {
        type: "p",
        text: "Conservamos su información mientras su cuenta esté activa o mientras sea necesario para cumplir con obligaciones legales, contables o de resolución de disputas.",
      },
    ],
  },
  {
    title: "5. Sus derechos",
    blocks: [
      { type: "p", text: "Usted tiene derecho a:" },
      {
        type: "list",
        items: [
          "Acceder a los datos personales que tenemos sobre usted",
          "Solicitar la corrección de datos inexactos",
          "Solicitar la eliminación de su cuenta y de los datos asociados",
          "Retirar su consentimiento para el uso de ubicación o notificaciones en cualquier momento",
          "Solicitar una copia de sus datos",
        ],
      },
      { type: "p", text: `Para ejercer estos derechos, contáctenos en: ${CORREO}` },
    ],
  },
  {
    title: "6. Eliminación de cuenta",
    blocks: [
      {
        type: "p",
        text: `Usted puede solicitar la eliminación de su cuenta y de sus datos personales en cualquier momento. Puede hacerlo desde la opción correspondiente dentro de la Aplicación o escribiendo a ${CORREO}. Una vez procesada la solicitud, eliminaremos sus datos. Solo conservaremos aquellos que debamos mantener por obligación legal, y únicamente durante el plazo que la ley exija.`,
      },
    ],
  },
  {
    title: "7. Menores de edad",
    blocks: [
      {
        type: "p",
        text: "La Aplicación no está dirigida a menores de 13 años (o de la edad mínima aplicable según su país). No recopilamos intencionalmente información de menores sin el consentimiento verificable de un padre o tutor.",
      },
    ],
  },
  {
    title: "8. Cambios a esta Política",
    blocks: [
      {
        type: "p",
        text: 'Podemos actualizar esta Política de Privacidad periódicamente. Notificaremos los cambios significativos dentro de la Aplicación o por correo electrónico. La fecha de "Última actualización" al inicio de este documento indica la versión más reciente.',
      },
    ],
  },
  {
    title: "9. Contacto",
    blocks: [
      { type: "p", text: "Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en:" },
      { type: "p", text: `${EMPRESA}\nCorreo: ${CORREO}\nGuatemala` },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      company={EMPRESA}
      title="Política de Privacidad"
      updatedAt={FECHA}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}