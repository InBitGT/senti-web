import LegalDocument, { Section } from "@/src/components/templates/LegalDocument/LegalDocument";
import type { Metadata } from "next";

const EMPRESA = "InBit GT";
const CORREO = "inbitgt@gmail.com";
const FECHA = "29 de septiembre de 2026";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y Condiciones de uso de las aplicaciones de ${EMPRESA}.`,
};

const INTRO: string[] = [
  `Estos Términos y Condiciones (los "Términos") regulan el acceso y uso de esta aplicación móvil (la "Aplicación"), desarrollada y operada por ${EMPRESA} ("nosotros", "nuestro").`,
  "Al descargar, registrarse o usar la Aplicación, usted acepta estos Términos. Si no está de acuerdo con ellos, no debe usar la Aplicación.",
];

const SECTIONS: Section[] = [
  {
    title: "1. Descripción del servicio",
    blocks: [
      {
        type: "p",
        text: "La Aplicación ofrece a sus usuarios funciones y servicios digitales que pueden incluir la gestión de una cuenta personal, el uso de la ubicación del dispositivo, el envío de notificaciones y la realización de pagos o transacciones.",
      },
      {
        type: "p",
        text: "Podemos agregar, modificar o retirar funciones de la Aplicación en cualquier momento para mejorar el servicio, por razones técnicas, de seguridad o por requerimientos legales.",
      },
    ],
  },
  {
    title: "2. Requisitos de uso",
    blocks: [
      { type: "p", text: "Para usar la Aplicación, usted declara que:" },
      {
        type: "list",
        items: [
          "Tiene al menos 13 años de edad o, si es menor de edad según la ley de su país, cuenta con la autorización de su padre, madre o tutor",
          "Tiene capacidad legal para aceptar estos Términos",
          "La información que proporciona es verdadera, exacta y está actualizada",
        ],
      },
    ],
  },
  {
    title: "3. Cuenta de usuario",
    blocks: [
      {
        type: "p",
        text: "Algunas funciones requieren que cree una cuenta. Usted es responsable de:",
      },
      {
        type: "list",
        items: [
          "Mantener la confidencialidad de su contraseña",
          "Toda la actividad que se realice desde su cuenta",
          "Notificarnos de inmediato si sospecha de un uso no autorizado de su cuenta",
        ],
      },
      {
        type: "p",
        text: `No nos hacemos responsables por pérdidas derivadas del uso no autorizado de su cuenta cuando este se deba a que usted no protegió sus credenciales. Puede solicitar la eliminación de su cuenta en cualquier momento desde la Aplicación o escribiendo a ${CORREO}.`,
      },
    ],
  },
  {
    title: "4. Uso aceptable",
    blocks: [
      { type: "p", text: "Al usar la Aplicación, usted se compromete a no:" },
      {
        type: "list",
        items: [
          "Usarla para fines ilegales, fraudulentos o no autorizados",
          "Suplantar la identidad de otra persona o proporcionar información falsa",
          "Intentar acceder sin autorización a nuestros sistemas, servidores o a cuentas de otros usuarios",
          "Interferir con el funcionamiento de la Aplicación, por ejemplo mediante virus, ataques o sobrecarga intencional",
          "Copiar, modificar, descompilar o aplicar ingeniería inversa a la Aplicación",
          "Usar sistemas automatizados para extraer datos de la Aplicación sin nuestro permiso",
        ],
      },
    ],
  },
  {
    title: "5. Pagos",
    blocks: [
      {
        type: "p",
        text: "Cuando la Aplicación permita realizar pagos, estos son procesados por un proveedor de pagos externo, sujeto a sus propios términos y políticas. No almacenamos los datos completos de su tarjeta.",
      },
      {
        type: "p",
        text: "Los precios, cargos aplicables y condiciones de cada transacción se muestran antes de confirmarla. Al confirmar un pago, usted autoriza el cargo correspondiente al método de pago seleccionado.",
      },
      {
        type: "p",
        text: `Si considera que un cargo es incorrecto, puede solicitar su revisión escribiendo a ${CORREO}. Las solicitudes de reembolso se evaluarán caso por caso, sin perjuicio de los derechos que le otorga la legislación de protección al consumidor aplicable.`,
      },
    ],
  },
  {
    title: "6. Permisos del dispositivo",
    blocks: [
      {
        type: "p",
        text: "Algunas funciones requieren permisos del dispositivo, como la ubicación o las notificaciones. Usted puede conceder o retirar estos permisos en cualquier momento desde la configuración de su dispositivo. Si los retira, es posible que algunas funciones no estén disponibles o no funcionen correctamente.",
      },
    ],
  },
  {
    title: "7. Privacidad",
    blocks: [
      {
        type: "p",
        text: "El tratamiento de sus datos personales se rige por nuestra Política de Privacidad, que forma parte de estos Términos. Le recomendamos leerla para entender qué información recopilamos y cómo la usamos.",
      },
    ],
  },
  {
    title: "8. Propiedad intelectual",
    blocks: [
      {
        type: "p",
        text: `La Aplicación, su código, diseño, logotipos, textos, gráficos y demás contenidos son propiedad de ${EMPRESA} o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual.`,
      },
      {
        type: "p",
        text: "Le otorgamos una licencia personal, limitada, no exclusiva, intransferible y revocable para usar la Aplicación conforme a estos Términos. Esta licencia no le transfiere ningún derecho de propiedad sobre la Aplicación.",
      },
    ],
  },
  {
    title: "9. Disponibilidad del servicio",
    blocks: [
      {
        type: "p",
        text: "Procuramos que la Aplicación esté disponible de forma continua, pero no garantizamos que funcione sin interrupciones ni errores. El servicio puede suspenderse temporalmente por mantenimiento, actualizaciones, fallas técnicas o causas fuera de nuestro control.",
      },
    ],
  },
  {
    title: "10. Limitación de responsabilidad",
    blocks: [
      {
        type: "p",
        text: 'La Aplicación se ofrece "tal cual" y "según disponibilidad". En la medida permitida por la ley, no seremos responsables por:',
      },
      {
        type: "list",
        items: [
          "Daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de la Aplicación",
          "Interrupciones, errores o pérdida de datos causados por fallas técnicas, de conexión o del dispositivo",
          "Actos u omisiones de terceros, incluidos los proveedores de pagos y otros servicios externos",
          "El uso indebido de la Aplicación por parte del usuario",
        ],
      },
      {
        type: "p",
        text: "Nada en estos Términos limita los derechos que la ley le reconoce como consumidor y que no pueden renunciarse.",
      },
    ],
  },
  {
    title: "11. Suspensión y terminación",
    blocks: [
      {
        type: "p",
        text: "Podemos suspender o cancelar su acceso a la Aplicación si incumple estos Términos, si detectamos actividad fraudulenta o si así lo exige la ley. Cuando sea posible, le notificaremos el motivo.",
      },
      {
        type: "p",
        text: "Usted puede dejar de usar la Aplicación y solicitar la eliminación de su cuenta en cualquier momento.",
      },
    ],
  },
  {
    title: "12. Cambios a estos Términos",
    blocks: [
      {
        type: "p",
        text: 'Podemos actualizar estos Términos periódicamente. Notificaremos los cambios significativos dentro de la Aplicación o por correo electrónico. La fecha de "Última actualización" al inicio de este documento indica la versión vigente. Si continúa usando la Aplicación después de los cambios, se entenderá que los acepta.',
      },
    ],
  },
  {
    title: "13. Ley aplicable y jurisdicción",
    blocks: [
      {
        type: "p",
        text: "Estos Términos se rigen por las leyes de la República de Guatemala. Cualquier controversia relacionada con ellos se someterá a los tribunales competentes de la Ciudad de Guatemala, sin perjuicio de los derechos que la ley le otorgue como consumidor.",
      },
    ],
  },
  {
    title: "14. Contacto",
    blocks: [
      {
        type: "p",
        text: "Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:",
      },
      { type: "p", text: `${EMPRESA}\nCorreo: ${CORREO}\nGuatemala` },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      company={EMPRESA}
      title="Términos y Condiciones"
      updatedAt={FECHA}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}