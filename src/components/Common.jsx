export const SectionPart = ({ title, children }) => {
  return (
    <section className="border border-neutral-200 rounded-xl p-4">
      <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 mb-2">
        {title}
      </h3>
      {children}
    </section>
  );
};
