import AnnouncedCourses from "@/layout/Screens/Home/AnnouncedCourses";
import CourseCategories from "@/layout/Screens/Home/CourseCategories";
import HeroSection from "@/layout/Screens/Home/HeroSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CourseCategories />
      <AnnouncedCourses />
    </main>
  )
}
