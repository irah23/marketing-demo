import "../styles/globals.css";

export const metadata = {
title: "Marketing Site",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}