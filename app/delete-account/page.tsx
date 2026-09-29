import LegalDocument, { Section } from "@/src/components/templates/LegalDocument/LegalDocument";
import type { Metadata } from "next";

const EMPRESA = "InBit GT";
const CORREO = "inbitgt@gmail.com";
const FECHA = "29 de septiembre de 2026";

// Ajusta estos valores según tu operación
const RUTA_EN_APP = "Perfil > Configuración > Eliminar cuenta";
const PLAZO_ELIMINACION = "30 días";
const PLAZO_RESPUESTA = "5 días hábiles";
const RETENCION_PAGOS = "5 años";
const RETENCION_RESPALDOS = "90 días";
const PLAZO_FALTA_PAGO = "3 meses";

export const metadata: Metadata = {
  title: "Eliminación de cuenta",
  description: `Cómo solicitar la eliminación de tu cuenta y datos en las aplicaciones de ${EMPRESA}.`,
};

const INTRO: string[] = [
  `En ${EMPRESA} respetamos su derecho a decidir sobre su información. En esta página se explica cómo solicitar la eliminación de su cuenta y de los datos asociados en la aplicación de ${EMPRESA}, qué información se elimina, cuál se conserva y durante cuánto tiempo.`,
  "Puede solicitar la eliminación desde la Aplicación o, si ya no tiene acceso a ella, por correo electrónico.",
];

const SECTIONS: Section[] = [
  {
    title: "1. Opción A: Eliminar la cuenta desde la Aplicación",
    blocks: [
      {
        type: "list",
        items: [
          "Abra la Aplicación e inicie sesión con su cuenta.",
          `Vaya a ${RUTA_EN_APP}.`,
          "Lea la información sobre las consecuencias de eliminar su cuenta.",
          "Confirme la eliminación.",
        ],
      },
      {
        type: "p",
        text: "Su sesión se cerrará, su suscripción se cancelará y la solicitud quedará registrada de inmediato.",
      },
    ],
  },
  {
    title: "2. Opción B: Solicitarlo por correo electrónico",
    blocks: [
      {
        type: "p",
        text: "Si ya desinstaló la Aplicación o no puede iniciar sesión, siga estos pasos:",
      },
      {
        type: "list",
        items: [
          `Envíe un correo a ${CORREO} desde la dirección de correo registrada en su cuenta.`,
          'Escriba en el asunto: "Solicitud de eliminación de cuenta".',
          "Incluya en el mensaje su nombre completo y el correo asociado a su cuenta.",
          `Le responderemos en un plazo máximo de ${PLAZO_RESPUESTA} para confirmar la solicitud.`,
        ],
      },
      {
        type: "p",
        text: "Si escribe desde un correo distinto al registrado, podemos pedirle información adicional para verificar que usted es el titular de la cuenta. Esto evita que otra persona elimine su cuenta sin autorización.",
      },
    ],
  },
  {
    title: "3. Qué datos se eliminan y cuáles se conservan",
    blocks: [
      {
        type: "table",
        headers: ["Tipo de dato", "Qué ocurre", "Plazo"],
        rows: [
          ["Suscripción", "Se cancela y no se realizan más cobros", "De inmediato"],
          ["Nombre y correo electrónico", "Se eliminan", `Dentro de ${PLAZO_ELIMINACION}`],
          ["Contraseña", "Se elimina", `Dentro de ${PLAZO_ELIMINACION}`],
          ["Datos de ubicación", "Se eliminan", `Dentro de ${PLAZO_ELIMINACION}`],
          ["Token de notificaciones", "Se elimina", `Dentro de ${PLAZO_ELIMINACION}`],
          ["Datos de uso vinculados a la cuenta", "Se eliminan", `Dentro de ${PLAZO_ELIMINACION}`],
          [
            "Registros de pagos y transacciones",
            "Se conservan por obligación legal, contable y fiscal",
            RETENCION_PAGOS,
          ],
          [
            "Copias de seguridad",
            "Se eliminan automáticamente en el ciclo de respaldos",
            `Hasta ${RETENCION_RESPALDOS}`,
          ],
          [
            "Estadísticas anónimas",
            "Se conservan sin vínculo con su identidad",
            "Indefinido",
          ],
        ],
      },
    ],
  },
  {
    title: "4. Datos que se conservan",
    blocks: [
      {
        type: "p",
        text: `Los registros de pagos y transacciones se conservan durante ${RETENCION_PAGOS} porque la legislación de Guatemala nos obliga a mantenerlos. Durante ese tiempo se guardan de forma segura, con acceso restringido, y solo se usan para cumplir obligaciones legales, contables o fiscales, o para atender disputas. Al terminar ese plazo se eliminan definitivamente.`,
      },
      {
        type: "p",
        text: "Las estadísticas anónimas no permiten identificarlo a usted, por lo que dejan de considerarse datos personales.",
      },
    ],
  },
  {
    title: "5. Antes de eliminar su cuenta",
    blocks: [
      { type: "p", text: "Tenga en cuenta lo siguiente:" },
      {
        type: "list",
        items: [
          "La eliminación es permanente y no se puede deshacer.",
          "Perderá el acceso a su historial y a la información de su cuenta.",
          "Su suscripción se cancelará automáticamente y no se realizarán más cobros.",
          "Si tiene pagos o transacciones pendientes, se procesarán antes de completar la eliminación.",
          "Desinstalar la Aplicación no elimina su cuenta ni cancela su suscripción. Debe solicitarlo con alguna de las opciones anteriores.",
        ],
      },
    ],
  },
  {
    title: "6. Suscripción y eliminación de cuenta",
    blocks: [
      { type: "sub", text: "Si elimina su cuenta" },
      {
        type: "p",
        text: "Al eliminar su cuenta, su suscripción se cancela automáticamente en ese momento. No se realizarán cobros futuros y sus datos se eliminan según lo descrito en la sección 3.",
      },
      { type: "sub", text: "Si cancela su suscripción o deja de pagarla" },
      {
        type: "p",
        text: "Su cuenta no se elimina de inmediato. Si usted cancela la suscripción o el pago no se realiza en la fecha correspondiente, ocurre lo siguiente:",
      },
      {
        type: "list",
        items: [
          "La suscripción se da de baja y su cuenta pasa a estado inactivo.",
          `Si la cuenta permanece sin suscripción activa durante ${PLAZO_FALTA_PAGO}, se elimina automáticamente junto con sus datos asociados.`,
          "Antes de la eliminación le enviaremos un aviso al correo registrado.",
          "Si reactiva su suscripción antes de que se cumpla ese plazo, su cuenta y su información se conservan sin cambios.",
        ],
      },
      {
        type: "p",
        text: "En todos los casos se aplican las mismas reglas de la sección 3: se eliminan los datos personales y se conservan únicamente los registros de pagos durante el plazo que exige la ley.",
      },
    ],
  },
  {
    title: "7. Contacto",
    blocks: [
      {
        type: "p",
        text: "Si tiene preguntas sobre la eliminación de su cuenta o de sus datos, puede contactarnos en:",
      },
      { type: "p", text: `${EMPRESA}\nCorreo: ${CORREO}\nGuatemala` },
    ],
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalDocument
      company={EMPRESA}
      title="Eliminación de cuenta y datos"
      updatedAt={FECHA}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}