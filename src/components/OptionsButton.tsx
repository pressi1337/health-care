export default function OptionsButton({ children, text = "Coming Soon" }: any) {
  return (
    <div className="relative w-50 flex flex-col gap-2 rounded-2xl border px-3 pb-4 pt-3 text-start shadow-xxs transition hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
      {children}
      <div className="text-gray-600 dark:text-gray-500">{text}</div>
    </div>
  );
}
