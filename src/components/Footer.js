import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium">About</h3>
            <p className="mt-2 text-sm">OpenAI is an AI research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-2 text-sm">
              <li>123 Main St</li>
              <li>Suite 200</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-2 text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="mt-2 text-sm">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Trademark Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base">&copy; 2023 OpenAI, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;