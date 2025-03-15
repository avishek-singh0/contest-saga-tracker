
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Documentation() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contest Tracker Documentation</h1>
        
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">About Contest Tracker</h2>
            <p className="text-muted-foreground">
              Contest Tracker is a web application that aggregates programming contests from popular coding platforms including 
              Codeforces, CodeChef, and LeetCode. It helps programmers stay updated with upcoming contests, track ongoing competitions, 
              and revisit past contests with their solutions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>View upcoming, ongoing, and past programming contests from Codeforces, CodeChef, and LeetCode</li>
              <li>Filter contests by platform and status</li>
              <li>Search contests by name</li>
              <li>Bookmark contests to revisit later</li>
              <li>Real-time countdown timers for upcoming contests</li>
              <li>Access to video solutions for past contests</li>
              <li>Responsive design (mobile, tablet, and desktop)</li>
              <li>Light and dark mode support</li>
            </ul>
          </section>

          <Tabs defaultValue="interfaces">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="interfaces">Interfaces</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="interfaces" className="p-4 rounded-md border mt-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Contest Interface</h3>
                  <div className="relative">
                    <pre className="p-4 rounded-md bg-muted overflow-x-auto">
{`interface Contest {
  id: string;
  name: string;
  platform: "codeforces" | "codechef" | "leetcode";
  url: string;
  startTime: Date;
  endTime: Date;
  duration: number; // in minutes
  status: "upcoming" | "ongoing" | "completed";
  solutionUrl?: string;
}`}
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-1 rounded-md hover:bg-accent"
                      onClick={() => copyToClipboard(`interface Contest {
  id: string;
  name: string;
  platform: "codeforces" | "codechef" | "leetcode";
  url: string;
  startTime: Date;
  endTime: Date;
  duration: number; // in minutes
  status: "upcoming" | "ongoing" | "completed";
  solutionUrl?: string;
}`, "contest-interface")}
                    >
                      {copied === "contest-interface" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Contest Filters Interface</h3>
                  <div className="relative">
                    <pre className="p-4 rounded-md bg-muted overflow-x-auto">
{`interface ContestFilters {
  platforms: {
    codeforces: boolean;
    codechef: boolean;
    leetcode: boolean;
  };
  status: {
    upcoming: boolean;
    ongoing: boolean;
    completed: boolean;
  };
}`}
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-1 rounded-md hover:bg-accent"
                      onClick={() => copyToClipboard(`interface ContestFilters {
  platforms: {
    codeforces: boolean;
    codechef: boolean;
    leetcode: boolean;
  };
  status: {
    upcoming: boolean;
    ongoing: boolean;
    completed: boolean;
  };
}`, "filters-interface")}
                    >
                      {copied === "filters-interface" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="p-4 rounded-md border mt-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">API Functions</h3>
                  <p className="text-muted-foreground mb-4">The API service provides the following functions for contest management:</p>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-md border">
                      <h4 className="font-medium mb-1">fetchAllContests()</h4>
                      <p className="text-sm text-muted-foreground mb-2">Fetches all contests from supported platforms.</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">async function fetchAllContests(): Promise&lt;Contest[]&gt;</p>
                    </div>
                    
                    <div className="p-4 rounded-md border">
                      <h4 className="font-medium mb-1">filterContests(contests, filters)</h4>
                      <p className="text-sm text-muted-foreground mb-2">Filters contests based on platform and status criteria.</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">function filterContests(contests: Contest[], filters: ContestFilters): Contest[]</p>
                    </div>
                    
                    <div className="p-4 rounded-md border">
                      <h4 className="font-medium mb-1">bookmarkContest(contestId)</h4>
                      <p className="text-sm text-muted-foreground mb-2">Toggles bookmark status for a contest. Returns true if bookmarked, false if unbookmarked.</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">function bookmarkContest(contestId: string): boolean</p>
                    </div>
                    
                    <div className="p-4 rounded-md border">
                      <h4 className="font-medium mb-1">getBookmarkedContests()</h4>
                      <p className="text-sm text-muted-foreground mb-2">Gets all bookmarked contest IDs.</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">function getBookmarkedContests(): string[]</p>
                    </div>
                    
                    <div className="p-4 rounded-md border">
                      <h4 className="font-medium mb-1">isContestBookmarked(contestId)</h4>
                      <p className="text-sm text-muted-foreground mb-2">Checks if a contest is bookmarked.</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">function isContestBookmarked(contestId: string): boolean</p>
                    </div>
                    
                    <div className="p-4 rounded-md border">
                      <h4 className="font-medium mb-1">updateContestSolution(contestId, solutionUrl)</h4>
                      <p className="text-sm text-muted-foreground mb-2">Updates a contest's solution URL. Returns success status.</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">async function updateContestSolution(contestId: string, solutionUrl: string): Promise&lt;boolean&gt;</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="p-4 rounded-md border mt-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">GitHub Repository</h3>
                  <p className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <a 
                      href="https://github.com/your-username/contest-tracker" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/your-username/contest-tracker
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">YouTube Playlists</h3>
                  <p className="text-muted-foreground mb-2">
                    Check our YouTube playlists for video solutions to past contests:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <p className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        <a 
                          href="https://www.youtube.com/playlist?list=..." 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Leetcode PCDs
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        <a 
                          href="https://www.youtube.com/playlist?list=..." 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Codeforces PCDs
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        <a 
                          href="https://www.youtube.com/playlist?list=..." 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Codechef PCDs
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Technologies Used</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>React with TypeScript</li>
                    <li>Tailwind CSS for styling</li>
                    <li>shadcn/ui component library</li>
                    <li>React Router for navigation</li>
                    <li>Tanstack Query for data fetching</li>
                    <li>Local Storage for bookmarks persistence</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold">Getting Started</h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                To run the Contest Tracker locally:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Clone the repository from GitHub</li>
                <li>Install dependencies with <code className="bg-muted px-1 py-0.5 rounded">npm install</code></li>
                <li>Start the development server with <code className="bg-muted px-1 py-0.5 rounded">npm run dev</code></li>
                <li>Access the application at <code className="bg-muted px-1 py-0.5 rounded">http://localhost:5173</code></li>
              </ol>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Future Enhancements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Integration with actual contest APIs from Codeforces, CodeChef, and LeetCode</li>
              <li>User authentication for personalized experiences</li>
              <li>Email or browser notifications for upcoming contests</li>
              <li>Automated YouTube solution link integration</li>
              <li>Contest participation history tracking</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
