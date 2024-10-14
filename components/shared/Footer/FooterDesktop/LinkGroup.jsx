import Link from "next/link";

const LinkGroup = ({ title, links }) => {
  return (
    <div className="space-y-2">
      <h5 className="font-semibold">{title}</h5>
      <ul className="text-sm list-none space-y-1">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkGroup;