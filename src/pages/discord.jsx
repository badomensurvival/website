// Redirect to https://discord.gg/vPKqE6mrZk

export default function Discord() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://discord.gg/WxK98rxgtP',
      permanent: false,
    },
  };
}
