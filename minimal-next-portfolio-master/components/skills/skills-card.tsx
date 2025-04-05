import Image from "next/image";
import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills = [] }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.length > 0 ? (
        skills.map((skill, id) => (
          <div
            key={id}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
              {typeof skill.icon === "string" ? (
                <Image
                  src={`/${skill.icon}`}
                  alt={skill.name}
                  width={50}
                  height={50}
                />
              ) : (
                skill.icon
              )}
              <div className="space-y-2">
                <h3 className="font-bold">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
                <Rating stars={skill.rating} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-muted-foreground">
          No skills available.
        </p>
      )}
    </div>
  );
}
