function About() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen p-10">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-10 text-center rounded-sm lg:text-center">
          <h1 className="font-bold sm:text-6xl -mt-20">About</h1>
          <p className="mt-10">
            Revolutionizing the traditional video player experience, this
            project places a significant emphasis on real-time face detection
            within the video content. Unlike conventional video players, which
            offer passive viewing experiences, this dynamic implementation
            brings faces within the video to life. Through innovative
            techniques, the system detects faces seamlessly and introduces an
            interactive element by drawing rectangles around the recognized
            faces. Users are no longer passive observers; they become active
            participants, engaged in the unfolding narrative. The video player's
            capacity to detect faces in real-time transforms the viewing
            experience, adding a layer of intelligence and interactivity.
            Whether it's a fleeting smile or an intense expression, these
            nuances are captured and accentuated, enhancing the overall
            engagement. The face detection feature goes beyond mere recognition;
            it becomes a dynamic element within the video playback. The system's
            ability to draw rectangles around detected faces ensures a visually
            compelling representation of the recognized entities. This subtle
            yet impactful visual cue adds an extra dimension to the video
            content, creating an immersive and captivating experience for users.
            In essence, the incorporation of real-time face detection elevates
            the video player from a conventional playback tool to a platform
            where digital content becomes more interactive and engaging. This
            innovative approach redefines the boundaries of video consumption,
            paving the way for a new era of dynamic and intelligent multimedia
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
