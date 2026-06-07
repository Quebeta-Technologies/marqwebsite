import useReveal from "@/hooks/useReveal";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const POSTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwwfHx8fDE3ODA0ODI4MDd8MA&ixlib=rb-4.1.0&q=85",
    caption: "Skyline views from our latest commercial mandate · Pune",
    likes: 482,
    comments: 27,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNDgyODA3fDA&ixlib=rb-4.1.0&q=85",
    caption: "Designed for living — handover, Mumbai",
    likes: 612,
    comments: 41,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    caption: "Grade-A office spaces in India's growth corridors",
    likes: 358,
    comments: 19,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/16902641/pexels-photo-16902641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    caption: "Land. Vision. Possibility.",
    likes: 271,
    comments: 14,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNDgyODA3fDA&ixlib=rb-4.1.0&q=85",
    caption: "Interior moments from a curated residence",
    likes: 524,
    comments: 38,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/8122150/pexels-photo-8122150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    caption: "Retail with a footfall story",
    likes: 309,
    comments: 22,
  },
];

export default function InstaFeed() {
  const ref = useReveal();
  return (
    <section
      id="insta"
      data-testid="insta-section"
      className="bg-[var(--marq-ivory)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                @marq_realtors
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--marq-ink)]">
              From the{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                Instagram feed.
              </span>
            </h2>
          </div>
          <a
            href="https://instagram.com/marq_realtors"
            target="_blank"
            rel="noreferrer"
            data-testid="insta-follow-cta"
            className="btn-outline self-start"
          >
            <Instagram size={15} strokeWidth={1.5} /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {POSTS.map((p) => (
            <a
              key={p.id}
              href="https://instagram.com/marq_realtors"
              target="_blank"
              rel="noreferrer"
              data-testid={`insta-post-${p.id}`}
              className="group relative aspect-square overflow-hidden bg-[var(--marq-sand)]"
            >
              <img
                src={p.image}
                alt={p.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram
                  size={16}
                  strokeWidth={1.5}
                  className="text-white self-end"
                />
                <div className="text-white">
                  <p className="text-[11px] leading-snug line-clamp-2">
                    {p.caption}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-white/85">
                    <span className="flex items-center gap-1">
                      <Heart size={11} strokeWidth={1.8} /> {p.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={11} strokeWidth={1.8} /> {p.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
