import Button from '@/components/shared/Button';

const HERO_VIDEO_SRC = '/images/POV_walk_into_hospital_lobby_20260910172235.mp4';

// Fixed to the source video's native 1918x845 resolution so the hero reads as a full banner
// (fills the viewport width, cropped to that height) rather than resizing with the text content
// like the old rotating-photo version — visitors scroll past it to reach the rest of the page.
// No `loop`: the video autoplays once and holds on its last frame, per Sonny's direction.
export default function HeroSection() {
  return (
    <section className="relative flex h-[845px] w-full items-center justify-center overflow-hidden bg-black text-center">
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-4 px-4 text-brand-yellow [-webkit-text-stroke:0.75px_black] [text-shadow:0_2px_10px_rgb(0_0_0_/_90%)]">
        <div className="mx-auto h-1 w-16 bg-brand-yellow" />
        <h1 className="mt-6 text-7xl font-bold sm:text-8xl">Tanauan Medical Center</h1>
        <p className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          Sa Kalusugan, Tanauan Medical Center ang Maaasahan — trusted, PhilHealth-accredited care
          in Tanauan, Batangas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 [-webkit-text-stroke:0px] [text-shadow:none]">
          <Button href="/find-a-doctor" variant="light">
            Find a Doctor
          </Button>
          <Button href="/services" variant="outlineLight">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
