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
	'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground';
export function NavbarWide() {
	return (
		<div className="grid grid-cols-[2.5fr_auto_2fr] place-content-center px-6 py-2">
			<div className="mx-auto-head flex.items-center">
				<a href="/elixir-no-webpages/">
					<img
						src="/elixir-no-webpages/images/logos/elixir-no-logo-white.svg"
						alt="Elixir Norway Logo"
						width="80px"
					/>
				</a>
			</div>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<a href="/elixir-no-webpages/organisation">Organisation</a>
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
						<NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
						<ul className="flex max-w-fit flex-col gap-3 p-3 p-6">
							<NavigationMenuLink href="/elixir-no-webpages/news">
								News
							</NavigationMenuLink>
						</ul>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ul className="flex max-w-fit flex-col gap-3 p-3 p-6 md:w-[200px] lg:w-[250px]">
							<NavigationMenuLink href="/elixir-no-webpages/events">
								Events
							</NavigationMenuLink>
						</ul>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
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
