import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <>
        <a href="#" className="rounded inline-flex flex-col h-full">
            <img
                className="object-cover rounded-3xl flex-grow"
                src={project?.image}
                alt=""
            />
            <div className="content">
                <span className='text-sm text-gray-600 mb-2 inline-block'>App Design - June 20, 2023</span>
                <h3 className="text-2xl font-bold font-heading">
                    {project?.title}
                </h3>
            </div>
        </a>
    </>
  )
}

export default ProjectCard