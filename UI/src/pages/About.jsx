export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About CloudNexis
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to CloudNexis! This blog platform was created by Team 7
              as a college project. CloudNexis is a forward-thinking platform 
              centered around cloud-native microservices architecture, designed 
              to provide scalable, resilient, and efficient solutions for modern enterprises. 
            </p>

            <p>
            Our platform ensures that each service operates independently while seamlessly 
            integrating to deliver optimal performance.
            At CloudNexis, we prioritize flexibility, enhanced security, and continuous 
            innovation. Through our microservices ecosystem, we empower businesses 
            to adapt quickly to changing demands, ensuring smooth operations and growth 
            in an ever-evolving digital landscape.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
              Discover the future of cloud-native technology with CloudNexis—where 
              every service is crafted to perform, adapt, and scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
