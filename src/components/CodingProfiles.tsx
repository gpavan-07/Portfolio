import { codingProfiles } from "../data/codingProfiles";
import CodingProfileCard from "./CodingProfileCard";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Track record</p>
          <h2 className="section-heading mt-2">Coding Profiles</h2>
          <p className="section-sub mx-auto">
            Find me on these platforms and check out my coding journey.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((profile) => (
            <CodingProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
