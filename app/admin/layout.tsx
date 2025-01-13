// app/admin/layout.tsx

import React from 'react';

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Only render admin content without Navbar/ Footer */}
        {children}
      </body>
    </html>
  );
}
