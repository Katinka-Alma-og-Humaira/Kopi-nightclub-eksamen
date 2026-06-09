const RecentBlogs = () => {
  return (
    <div className=" mx-5 sm:hidden">
      <div className="flex flex-col items-center mb-(--space-xs)">
        <h1>RECENT BLOGS</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>
      <div className="mb-30">
        <img src="/assets/content-img/blog_full1.jpg" alt="Billede af dj-pult" />
        <h2 className="my-(--space-xs)">more than 20 yea...</h2>
        <h3 className="mb-(--space-m) text-(--color-pink)!">
          <span>BY: Admin </span>
          <span>/</span>
          <span>3 Comments </span>
          <span>/</span>
          <span>16 Nov 2018</span>
        </h3>
        <p className="text-(--color-neutrals-200)!">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
      <div className="mb-30">
        <img src="/assets/content-img/blog_full2.jpg" alt="Billede af mand ved dj-pult" />
        <h2 className="my-(--space-xs)">more than 20 yea...</h2>
        <h3 className="mb-(--space-m) text-(--color-pink)!">
          <span>BY: Admin </span>
          <span>/</span>
          <span>3 Comments </span>
          <span>/</span>
          <span>16 Nov 2018</span>
        </h3>
        <p className="text-(--color-neutrals-200)!">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
      <div className="mb-30">
        <img src="/assets/content-img/blog_full3.jpg" alt="Billede af mand der pejer" />
        <h2 className="my-(--space-xs)">more than 20 yea...</h2>
        <h3 className=" mb-(--space-m) text-(--color-pink)!">
          <span>BY: Admin </span>
          <span>/</span>
          <span>3 Comments </span>
          <span>/</span>
          <span>16 Nov 2018</span>
        </h3>
        <p className="text-(--color-neutrals-200)!">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
    </div>
  );
};

export default RecentBlogs;
