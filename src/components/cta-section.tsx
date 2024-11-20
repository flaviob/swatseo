import { config } from "../../site-config";

export function CtaSection() {
  return (
    <section className="container">
      <div className="grid grid-cols-0 items-center gap-6 rounded-xl bg-primary md:px-12 lg:px-24 py-24 sm:gap-10">
        <h2 className="text-center font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl sm:leading-tight">
          Book a call today to start growing your website!
        </h2>
        <div className=" bg-background rounded-md">
          <iframe
            src={config.googleAppointmentLink}
            width="100%"
            height="650"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
