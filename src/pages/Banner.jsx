

const Banner = () => {
    return (
        <div>
               <div className="hero h-[420px] bg-purple-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="../../public/photo1.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="py-">I am Sanjida Sultana Mitu,</p>
      <p className="py-2">Interested in learning about new technologies, I discovered my passion for web programming. I am aspiring to bring that passion to a full-time role.</p>
      <button className="btn btn-outlines border-solid border-2 border-indigo-600 ">Download My Resume</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;