import TeamMember from "./pages/home/team_member_card";

const teamMembers = [
    {
        name: "Sagar Sunar",
        role: "CEO",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fsagar.jpg?alt=media&token=a6329b29-e9b9-442f-90e0-0f1fa81c13d2",
        desc: 'As the driving force behind Nohara Technologies, Sagar brings a strategic mindset and entrepreneurial expertise to the table. With a deep understanding of business development, SaaS innovation, and digital transformation, he ensures the company stays ahead of industry trends. His leadership is focused on fostering innovation, building strong client relationships, and delivering impactful technology solutions.'
    },
    {
        name: "Sagar Prajapati",
        role: "Project Manager",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2FIMG-20211029-WA0012.png?alt=media&token=00573cc8-00d5-4a57-93a5-a9ff4c51a99f",
        desc: 'A tech enthusiast with a sharp eye for product development and agile project management, Sagar is the bridge between vision and execution. He specializes in software architecture, team leadership, and process optimization, ensuring that every project is delivered efficiently and meets the highest standards. His expertise lies in transforming ideas into fully functional, scalable, and user-centric software products.'
    },
    {
        name: "Manav Koirala",
        role: "Software Engineer",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fmanav.png?alt=media&token=beacd15c-3f3d-4179-8e2e-48da8bb06701",
        desc: 'With a passion for coding and problem-solving, Manav is a highly skilled full-stack developer who specializes in cloud computing, system architecture, and scalable application development. His ability to design and implement robust, secure, and efficient software solutions makes him an integral part of the Nohara Technologies team. From crafting intuitive user experiences to optimizing backend performance, he ensures that every product is built with excellence.'
    },
];

const SectionSeven: React.FC = () => {
    return (
        <section className="flex flex-row pt-24 sub-section overflow-hidden gap-x-12 font-roboto px-10 lg:px-20 bg-white">
            <div className="bg-white w-full h-full flex flex-col gap-y-10 border-black" style={{ borderTopWidth: "1px" }}>
                <div className="w-full flex flex-col lg:flex-row justify-between pt-3 gap-y-4">
                    <p className="md:flex-[20]">/ WE ARE NOHARAs /</p>
                    <p className="md:flex-[40] text-xl font-bold tracking-wider">Team</p>
                    <p className="md:flex-[40] hidden lg:block text-end">
                        A full-cycled IT Company from Asia, made of colleagues turned friends who genuinely enjoy working together.
                    </p>
                </div>

                <div className="w-full lg:w-4/5 flex flex-row justify-center gap-y-5 items-center flex-wrap ml-auto gap-x-5 lg:gap-x-16">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionSeven;
