import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  link: string;
}
const BlogPostCard = ({
  title,
  excerpt,
  date,
  author,
  image,
  slug,
  link
}: BlogPostProps) => {
  return <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User size={14} />
            <span>{author}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        
        <a href={`https://blog.swirl.cx/${link}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple font-medium hover:text-purple-dark transition-colors mt-auto">
          Read More
          <ArrowRight size={16} className="ml-1" />
        </a>
      </CardContent>
    </Card>;
};
const blogPosts = [{
  title: "Overcoming Payroll Challenges in Restaurant",
  excerpt: "The Challenges of Restaurant Payroll.",
  date: "April 2, 2025",
  author: "Abid Khan",
  image: "https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=800&auto=format",
  slug: "overcome payroll challenges in restaurants",
  link: "https://blog.swirl.cx/2025/04/02/overcome-payroll-challenges-in-restaurants/"
}, {
  title: "Elevating Dining Experience",
  excerpt: "QR Code Ordering: The Secret Ingredient to a Stellar Dining Experience.",
  date: "April 18, 2025",
  author: "Abid Khan",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
  slug: "elevate dining",
  link: "https://blog.swirl.cx/2025/03/06/elevating-dining/"
}];
const BlogSection = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-gray-950">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Insights, tips, and industry trends to help your restaurant thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => <BlogPostCard key={index} {...post} />)}
        </div>

        <div className="mt-12 text-center">
          <a href="https://blog.swirl.cx" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            View Our Blogs
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>;
};
export default BlogSection;