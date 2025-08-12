import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2024 Learn Palestinian. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
