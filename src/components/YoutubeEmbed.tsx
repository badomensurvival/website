type Props = {
  src: string;
};

export default function YoutubeEmbed({ src }: Props) {
  return (
    <iframe
      src={src}
      width="100%"
      style={{ aspectRatio: '16/9' }}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
