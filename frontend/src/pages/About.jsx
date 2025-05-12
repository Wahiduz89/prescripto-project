import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const About = () => {
  // Animation variants - refined for more professional transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeInOut"
      }
    }
  }
  
  const cardHover = {
    rest: { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)" },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  }
  
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    }
  ]
  
  // Testimonials data
  const testimonials = [
    {
      quote: "Prescripto has completely transformed how I manage my healthcare appointments. The interface is intuitive and booking is seamless.",
      name: "Jennifer K.",
      title: "Patient"
    },
    {
      quote: "As a healthcare provider, Prescripto has streamlined my practice and improved patient communication significantly.",
      name: "Dr. Robert M.",
      title: "Cardiologist"
    }
  ]
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container mx-auto px-4 py-12 max-w-7xl"
    >
      <motion.div 
        className='text-center mb-16'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className='text-4xl font-bold text-gray-800 mb-3'>ABOUT <span className='text-primary'>US</span></h1>
        <div className='w-32 h-1.5 bg-primary mx-auto rounded-full'></div>
        <p className='mt-6 text-gray-600 max-w-2xl mx-auto text-lg'>Transforming healthcare through technology and compassionate service</p>
      </motion.div>

      <motion.div 
        className='my-20 flex flex-col md:flex-row gap-14 items-center'
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className='md:w-2/5 relative' variants={fadeInLeft}>
          <motion.div 
            className='absolute -z-10 w-full h-full bg-blue-50 rounded-lg -left-6 -top-6'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
          <motion.img 
            className='w-full rounded-lg shadow-xl object-cover h-[450px]' 
            src={assets.about_image} 
            alt="Healthcare professionals at Prescripto" 
            variants={fadeIn}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div 
          className='flex flex-col justify-center gap-6 md:w-3/5 text-base leading-relaxed text-gray-600'
          variants={fadeInRight}
        >
          <motion.span className='text-primary font-semibold tracking-wider text-sm uppercase'>Our Story</motion.span>
          <motion.p variants={fadeIn} className='font-medium text-lg'>Welcome to <span className='text-primary font-semibold'>Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</motion.p>
          <motion.p variants={fadeIn}>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</motion.p>
          <motion.h2 variants={fadeIn} className='text-gray-800 text-2xl font-bold mt-4'>Our Vision</motion.h2>
          <motion.p variants={fadeIn}>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</motion.p>
          {/* Buttons removed as requested */}
        </motion.div>
      </motion.div>

      <motion.div 
        className='text-center mb-16 mt-24'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-bold text-gray-800 mb-3'>WHY <span className='text-primary'>CHOOSE US</span></h2>
        <div className='w-32 h-1.5 bg-primary mx-auto rounded-full'></div>
        <p className='mt-6 text-gray-600 max-w-2xl mx-auto'>We combine cutting-edge technology with compassionate care to deliver an exceptional healthcare experience</p>
      </motion.div>

      <motion.div 
        className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className='bg-white border border-gray-100 rounded-xl shadow-md px-8 py-10 flex flex-col gap-4 text-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group'
          variants={fadeIn}
          whileHover={cardHover.hover}
          initial="rest"
          whileInView="visible"
        >
          <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className='text-lg font-bold'>EFFICIENCY</h3>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </motion.div>
        <motion.div 
          className='bg-white border border-gray-100 rounded-xl shadow-md px-8 py-10 flex flex-col gap-4 text-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group'
          variants={fadeIn}
          whileHover={cardHover.hover}
          initial="rest"
          whileInView="visible"
        >
          <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className='text-lg font-bold'>CONVENIENCE</h3>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </motion.div>
        <motion.div 
          className='bg-white border border-gray-100 rounded-xl shadow-md px-8 py-10 flex flex-col gap-4 text-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group'
          variants={fadeIn}
          whileHover={cardHover.hover}
          initial="rest"
          whileInView="visible"
        >
          <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className='text-lg font-bold'>PERSONALIZATION</h3>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className='my-24'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-3'>WHAT OUR <span className='text-primary'>USERS SAY</span></h2>
          <div className='w-32 h-1.5 bg-primary mx-auto rounded-full'></div>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className='bg-white p-8 rounded-xl shadow-lg border border-gray-100'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className='flex flex-col h-full'>
                <div className='mb-4 text-primary'>
                  <svg className="w-10 h-10 text-blue-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className='text-gray-600 italic mb-6 flex-grow'>"{testimonial.quote}"</p>
                <div className='mt-auto'>
                  <p className='font-bold text-gray-800'>{testimonial.name}</p>
                  <p className='text-gray-500 text-sm'>{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Team Section */}
      <motion.div 
        className='my-24'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-3'>OUR <span className='text-primary'>TEAM</span></h2>
          <div className='w-32 h-1.5 bg-primary mx-auto rounded-full'></div>
          <p className='mt-6 text-gray-600 max-w-2xl mx-auto'>Meet the dedicated professionals behind Prescripto</p>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className='bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className='w-full h-64 object-cover object-center'
              />
              <div className='p-6'>
                <h3 className='font-bold text-xl text-gray-800'>{member.name}</h3>
                <p className='text-primary font-medium'>{member.role}</p>
                <div className='mt-4 flex gap-3'>
                  <a href={member.linkedin} className='text-gray-500 hover:text-primary transition-colors'>
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.twitter} className='text-gray-500 hover:text-primary transition-colors'>
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl px-8 my-16 shadow-inner"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Experience Healthcare Reimagined</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">Join thousands of satisfied users who have transformed their healthcare experience with Prescripto.</p>
        <motion.button 
          className="mt-4 px-10 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default About
