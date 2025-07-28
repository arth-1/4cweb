'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact-us" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Get In Touch</h2>
          <p className="text-lg text-foreground/80 mt-2">We&apos;d love to hear from you.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-card p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-white/10 border-white/20"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="bg-white/10 border-white/20"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us what's on your mind..." {...field} className="bg-white/10 border-white/20 min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full px-8 bg-accent hover:bg-accent/90">Send Message</Button>
              </form>
            </Form>
          </div>
          <div className="glass-card p-6 flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5"/>
                <div>
                    <h3 className="font-headline text-base font-semibold">Email</h3>
                    <a href="" className="text-foreground/80 hover:text-accent text-sm break-all">email@example.com</a>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5"/>
                <div>
                    <h3 className="font-headline text-base font-semibold">Phone</h3>
                    <p className="text-foreground/80 text-sm">+91 6969696969</p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5"/>
                <div>
                    <h3 className="font-headline text-base font-semibold">Address</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">Koi<br/>Acchi<br/>Jagah</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
