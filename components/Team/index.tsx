// Basic Imports
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// JSON Imports
import TeamMembersData from "@/common/dataSource/team-data.json";

// Components Imports
import { TeamMemberCardSkeleton } from "@/components/ui-patterns/Skeleton";

// Types Imports
import { TeamMemberCardType } from "@/types/team-type";

// Icon Imports
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team: React.FunctionComponent<TeamMemberCardType> = () => {
  const [teamMembersData, setTeamMembersData] = useState<any>(TeamMembersData);

  

  return (
    <React.Fragment>
      <section className="team-section py-24 my-12 bg-product-purple-dark">
        <div className="team-section-content-wrapper wrapped-view">
          <h3 className="get-started-title font-semibold tracking-wider text-sm uppercase flex flex-row text-white text-opacity-50 max-sm:items-center max-sm:justify-center max-sm: max-sm:mx-auto">
            {"The Team"}
          </h3>
          <h1 className="get-started-headline font-product-bungee mt-4 text-4xl flex flex-col items-start justify-start w-fit h-fit max-sm:items-center max-sm:justify-center max-sm:text-3xl max-sm:mx-auto">
            <span className="text-white">
              <span>{"Meet the"}</span>
              <span className="text-product-orange">{" builders"}</span>
            </span>
            <span className="text-white">{"behind localhub."}</span>
          </h1>

          <div className="team-members-list-wrapper mt-12 flex flex-row items-start justify-start gap-12 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:mx-auto">
            {teamMembersData?.length > 0 ? (
              teamMembersData?.map(
                (teamMember: TeamMemberCardType, teamMemberIndex: number) => (
                  <TeamMemberCard
                    picture={teamMember?.picture}
                    fullName={{
                      firstName: teamMember?.fullName?.firstName,
                      lastName: teamMember?.fullName?.lastName,
                    }}
                    isAvenger={teamMember?.isAvenger}
                    directWebsite={teamMember?.directWebsite}
                    socialProfile={{
                      twitterUsername:
                        teamMember?.socialProfile?.twitterUsername,
                      instagramUsername:
                        teamMember?.socialProfile?.instagramUsername,
                      linkedInUsername:
                        teamMember?.socialProfile?.linkedInUsername,
                      githubUsername: teamMember?.socialProfile?.githubUsername,
                    }}
                    description={teamMember?.description}
                    key={teamMemberIndex}
                  />
                )
              )
            ) : (
              <div className="skeleton-loading-cards-wrapper grid grid-cols-4 items-start justify-start gap-12">
                <TeamMemberCardSkeleton visibility={20} />
                <TeamMemberCardSkeleton visibility={20} />
                <TeamMemberCardSkeleton visibility={20} />
                <TeamMemberCardSkeleton visibility={20} />
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

function TeamMemberCard(
  {
    picture,
    fullName,
    isAvenger,
    directWebsite,
    socialProfile,
    description,
  }: TeamMemberCardType,
  props: any
) {
  return (
    <React.Fragment>
      <div
        className="team-member-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px]"
        {...props}
      >
        <div className="team-member-picture-cotainer relative border-2 border-white">
          <Image
            src={picture}
            alt="team-mate"
            width="280"
            height="370"
            className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
            priority
          />
        </div>
        <div className="team-member-card-details-wrapper">
          <div className="flex flex-row items-start justify-between">
            <div>
              <h2 className="team-member__fullName-wrapper font-semibold text-white text-lg leading-tight">
                {fullName?.firstName + " " + fullName?.lastName}
              </h2>
              {directWebsite?.link && (
                <span className="team-member__directWebsite-wrapper text-sm font-semibold text-white text-opacity-50 hover:text-opacity-60 leading-tight">
                  <Link
                    href={directWebsite?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {directWebsite?.label}
                  </Link>
                </span>
              )}
            </div>
            {isAvenger && (
              <span className="avenger-team-member-tag-wrapper font-product-bungee text-sm text-white">
                {"AVENGER"}
              </span>
            )}
          </div>
          <div className="team-member__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80">
            {socialProfile?.twitterUsername && (
              <Link
                href={`https://twitter.com/${socialProfile?.twitterUsername}`}
                target="_blank"
              >
                <FaTwitter />
              </Link>
            )}
            {socialProfile?.instagramUsername && (
              <Link
                href={`https://instagram.com/${socialProfile?.instagramUsername}`}
                target="_blank"
              >
                <FaInstagram />
              </Link>
            )}
            {socialProfile?.linkedInUsername && (
              <Link
                href={`https://linkedin.com/in/${socialProfile?.linkedInUsername}`}
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            )}
            {socialProfile?.githubUsername && (
              <Link
                href={`https://github.com/${socialProfile?.githubUsername}`}
                target="_blank"
              >
                <FaGithub />
              </Link>
            )}
          </div>
          <p className="team-member__description-wrapper mt-3 text-white font-semibold">
            {description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Team;
