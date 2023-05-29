type Props = {
  src: string;
};

export default function YoutubeEmbed({ src }: Props) {
  return (
    <iframe
      src={src}
      className="w-full aspect-video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
