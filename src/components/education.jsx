import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaUniversity, FaGraduationCap, FaSchool} from "react-icons/fa";

function Eduction() {
    return (
        <div
            id="education"
            className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
        >
            <div
                className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"/>
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Educations
        </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  "
                    contentStyle={{background: '#161a2f', boxShadow: 'none'}}
                    contentArrowStyle={{borderRight: '7px solid  #161a2f'}}
                    date="2023 - present"
                    visible={true}
                    iconStyle={{background: '#1a1443', color: '#fff'}}
                    icon={<FaUniversity/>}
                >
                    <h3 className="vertical-timeline-element-title text-2xl text-[#16f2b3]">Generative AI Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-md pt-2">Presidential Initiative for
                        Artificial Intelligence & Computing</h4>
                    <p className="text-lg">
                        Grade: A
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{background: '#161a2f', boxShadow: 'none'}}
                    contentArrowStyle={{borderRight: '7px solid  #161a2f'}}
                    className="vertical-timeline-element--work"
                    visible={true}
                    date="2018 - 2022"
                    iconStyle={{background: '#1a1443', color: '#fff'}}
                    icon={<FaGraduationCap/>}
                >
                    <h3 className="vertical-timeline-element-title text-2xl text-[#16f2b3]">BS Mathematics</h3>
                    <h4 className="vertical-timeline-element-subtitle text-md pt-2"> Govt Murray College,Sialkot</h4>
                    <p className="text-lg">
                        Grade: A
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#161a2f', boxShadow: 'none'}}
                    contentArrowStyle={{borderRight: '7px solid  #161a2f'}}
                    date="2016 - 2018"
                    visible={true}
                    iconStyle={{background: '#1a1443', color: '#fff'}}
                    icon={<FaSchool/>}
                >
                    <h3 className="vertical-timeline-element-title text-2xl text-[#16f2b3]">Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle text-md pt-2">Govt Allama Iqbal
                        College,Sialkot</h4>
                    <p className="text-lg">
                        Grade:B
                    </p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </div>
    );
}

export default Eduction;
