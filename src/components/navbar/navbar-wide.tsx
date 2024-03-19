import * as React from 'react';
import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useRef } from "react";
import { useState } from "react";

type NavItems = {
	title: string;
	href: string;
	description: string;
};

const projects: NavItems[] = [
	{
		title: 'BioMedData',
		href: '/elixir-no-webpages/projects/bio-med-data',
		description:
			'Research infrastructure to promote FAIR data management within life sciences',
	},
	{
		title: 'EU Projects',
		href: '/elixir-no-webpages/projects/eu-projects',
		description: 'Elixir-converge, B1MG and EOSC-Life',
	},
	{
		title: 'NeIC',
		href: '/elixir-no-webpages/projects/neic',
		description: 'Nordic collaboration on sensitive data',
	},
	{
		title: 'GBC',
		href: '/elixir-no-webpages/projects/gbc',
		description: 'Global Biodata Coalition',
	},
];

const services: NavItems[] = [
	{
		title: 'Helpdesk',
		href: '/elixir-no-webpages/services/helpdesk',
		description: 'Support for bioinformatics and data management',
	},
	{
		title: 'Tools',
		href: '/elixir-no-webpages/services/tools',
		description:
			'Infrastructure and software for workflows, databases and storage for life science data',
	},
	{
		title: 'Training',
		href: '/elixir-no-webpages/services/training',
		description:
			'Courses and workshops in informatics and data management for life sciences',
	},
];
const navLinkClasses: string =
	'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ';

const newNavColumn: string =	
	'group inline-flex h-0 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
export function NavbarWide() {
	return (
		<div className="grid grid-cols-[2fr_auto_2fr] place-content-center px-6 py-2">
			<div className="mx-auto-head flex.items-center">
				<a href="/elixir-no-webpages">
					<img
						src="/elixir-no-webpages/images/logos/elixir-no-logo-white.svg"
						alt="Elixir Norway Logo"
						width="80px"
					/>
				</a>
			</div>
			<NavigationMenu className="navigation-desktop">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<a href='/elixir-no-webpages/organisation/'>Organisation</a>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="flex max-w-fit flex-col gap-3 p-3">
								<NavigationMenuLink 
									href="/elixir-no-webpages/organisation/bergen"
									className={navLinkClasses}>
									Bergen
								</NavigationMenuLink>
								<NavigationMenuLink
									href="/elixir-no-webpages/organisation/oslo"
									className={navLinkClasses}>
									Oslo
								</NavigationMenuLink>
								<NavigationMenuLink
									href="/elixir-no-webpages/organisation/tromsoe"
									className={navLinkClasses}>
									Tromsø
								</NavigationMenuLink>
								<NavigationMenuLink
									href="/elixir-no-webpages/organisation/trondheim"
									className={navLinkClasses}>
									Trondheim
								</NavigationMenuLink>
								<NavigationMenuLink
									href="/elixir-no-webpages/organisation/aas"
									className={navLinkClasses}>
									Ås
								</NavigationMenuLink>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="lg:grid-col-[.75fr_1fr] grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
								{projects.map(it => (
									<ListItem href={it.href} title={it.title} key={it.title}>
										{it.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<a href='/services/'>Services</a>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="lg:grid-col-[.75fr_1fr] grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
								{services.map(it => (
									<ListItem href={it.href} title={it.title} key={it.title}>
										{it.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
							<NavigationMenuLink className={newNavColumn} href="/news">News</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
							<NavigationMenuLink className={newNavColumn} href="/events">Events</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

export function Hamburger({isOpen }){
    return(
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style>{`
                .hamburger{
                    width: 3rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }

                .burger{
                    width: 3rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: white;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }

                .burger1{
					width: 2rem;
					height: 0.25rem;
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
					width: 2rem;
					height: 0.25rem;
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
					width: 2rem;
					height: 0.25rem;
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }

                
            `}</style>
        </>
    )
}

export function HamburgerNav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div>
            <div className="navigation">
                <ul>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem className="py-3">
								<NavigationMenuTrigger>
									<a href='/elixir-no-webpages/organisation/'>Organisation</a>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="flex max-w-fit flex-col gap-3 p-3">
										<NavigationMenuLink 
											href="/elixir-no-webpages/organisation/bergen"
											className={navLinkClasses}>
											Bergen
										</NavigationMenuLink>
										<NavigationMenuLink
											href="/elixir-no-webpages/organisation/oslo"
											className={navLinkClasses}>
											Oslo
										</NavigationMenuLink>
										<NavigationMenuLink
											href="/elixir-no-webpages/organisation/tromsoe"
											className={navLinkClasses}>
											Tromsø
										</NavigationMenuLink>
										<NavigationMenuLink
											href="/elixir-no-webpages/organisation/trondheim"
											className={navLinkClasses}>
											Trondheim
										</NavigationMenuLink>
										<NavigationMenuLink
											href="/elixir-no-webpages/organisation/aas"
											className={navLinkClasses}>
											Ås
										</NavigationMenuLink>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem className="py-3">
								<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="lg:grid-col-[.75fr_1fr] grid gap-6 p-6 md:w-[400px] lg:w-[500px]">
										{projects.map(it => (
											<ListItem href={it.href} title={it.title} key={it.title}>
												{it.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem className="py-3">
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="lg:grid-col-[.75fr_1fr] grid gap-6 p-6 md:w-[400px] lg:w-[500px]">
										{services.map(it => (
											<ListItem href={it.href} title={it.title} key={it.title}>
												{it.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem className="py-3">
								<NavigationMenuLink className={newNavColumn} href="/elixir-no-webpages/news">News</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem className="py-3">
								<NavigationMenuLink className={newNavColumn} href="/elixir-no-webpages/events">Events</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
                </ul>                    
            </div>
			<div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>


            <style>{`

                .navigation{
                    width: auto;
                    height: 20px;
                }
                
                
                .navigation ul{
                    display:none;
                }



                .hamburger{
                    display: none;
                    z-index: 6;
                } 


                @media (max-width: 767px){
                  
					.navigation-desktop{
						display:none;
						
					}

                    .hamburger{
						display: flex;
						z-index: 6;
						position:absolute;
    					right: 0;
						top: 0;
						margin-top: 10px;
						margin-right: 15px;
                    }
                   
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: black;
                        position:fixed;
    					right: 0;
						width: auto;
                    	height: auto;
                    }
                }
                
               
                
            `}</style>
        </div>
    )

}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a ref={ref} className={cn(navLinkClasses, className)} {...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
