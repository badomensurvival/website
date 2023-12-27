// Redirect to https://discord.gg/vPKqE6mrZk

export default function Mapa() {
  return <></>;
}
export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://map.badomen.com.br/',
      permanent: false,
    },
  };
}
