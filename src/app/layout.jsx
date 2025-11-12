import '@/scss/placeholders/reset.scss';
import '@/fonts/fonts.scss';

export const metadata = {
  title: {
    template: '%s | CoolGus',
    default: 'CoolGus'
  },
  description: "En lille, hyggelig og familiedrevet Sauna Gus bygget fra bunden og selv-hostet af ejeren. Saunaen har plads til 8 personer og byder på smuk udsigt, to koldtvandskar hvoraf det ene nedkøles til 0 grader, samt æteriske duftoplevelser via håndplukkede dufte, hældt over de varme sten for en autentisk gusoplevelse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}