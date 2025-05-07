import React, { useState } from 'react';
import { 
  Paintbrush, 
  PanelLeft, 
  Type, 
  Image, 
  Globe,
  Mail,
  Palette,
  Languages,
  FileJson
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/ui/Select';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/Label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { Checkbox } from '../../components/ui/Checkbox';

const Customization = () => {
  const [activeTab, setActiveTab] = useState('appearance');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [secondaryColor, setSecondaryColor] = useState('#10b981');
  const [accentColor, setAccentColor] = useState('#f97316');
  const [logoPosition, setLogoPosition] = useState('left');
  const [darkMode, setDarkMode] = useState(true);
  
  const defaultThemes = [
    { name: 'Default Blue', primary: '#3b82f6', secondary: '#10b981', accent: '#f97316' },
    { name: 'Professional Gray', primary: '#4b5563', secondary: '#6b7280', accent: '#d1d5db' },
    { name: 'Vibrant Purple', primary: '#8b5cf6', secondary: '#ec4899', accent: '#f43f5e' },
    { name: 'Dark Mode', primary: '#1f2937', secondary: '#374151', accent: '#4b5563' },
  ];

  const handleSaveChanges = () => {
    // Here you would save the customization changes
    alert('Customization settings saved!');
  };

  const handleThemeSelect = (theme) => {
    setPrimaryColor(theme.primary);
    setSecondaryColor(theme.secondary);
    setAccentColor(theme.accent);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Platform Customization</h1>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 gap-4 mb-6">
          <TabsTrigger value="appearance">
            <div className="flex items-center gap-2">
              <Paintbrush className="h-5 w-5" />
              <span className="hidden sm:inline">Appearance</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="layout">
            <div className="flex items-center gap-2">
              <PanelLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Layout</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="branding">
            <div className="flex items-center gap-2">
              <Image className="h-5 w-5" />
              <span className="hidden sm:inline">Branding</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="localization">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span className="hidden sm:inline">Localization</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="email">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Email Templates</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Color Scheme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input 
                        type="color" 
                        id="primaryColor" 
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input 
                        type="text" 
                        value={primaryColor} 
                        onChange={(e) => setPrimaryColor(e.target.value)} 
                        className="flex-grow"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input 
                        type="color" 
                        id="secondaryColor" 
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input 
                        type="text" 
                        value={secondaryColor} 
                        onChange={(e) => setSecondaryColor(e.target.value)} 
                        className="flex-grow"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input 
                        type="color" 
                        id="accentColor" 
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input 
                        type="text" 
                        value={accentColor} 
                        onChange={(e) => setAccentColor(e.target.value)} 
                        className="flex-grow"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id="darkMode" 
                      checked={darkMode} 
                      onCheckedChange={setDarkMode} 
                    />
                    <Label htmlFor="darkMode">Enable Dark Mode Option</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="headingFont">Heading Font</Label>
                    <Select id="headingFont">
                      <option value="inter">Inter</option>
                      <option value="roboto">Roboto</option>
                      <option value="opensans">Open Sans</option>
                      <option value="poppins">Poppins</option>
                      <option value="montserrat">Montserrat</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bodyFont">Body Font</Label>
                    <Select id="bodyFont">
                      <option value="inter">Inter</option>
                      <option value="roboto">Roboto</option>
                      <option value="opensans">Open Sans</option>
                      <option value="poppins">Poppins</option>
                      <option value="montserrat">Montserrat</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="fontSize">Base Font Size</Label>
                    <Select id="fontSize">
                      <option value="small">Small (14px)</option>
                      <option value="medium" selected>Medium (16px)</option>
                      <option value="large">Large (18px)</option>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Predefined Themes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {defaultThemes.map((theme) => (
                    <div 
                      key={theme.name}
                      onClick={() => handleThemeSelect(theme)}
                      className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-all"
                    >
                      <div className="text-sm font-medium mb-2">{theme.name}</div>
                      <div className="flex space-x-2">
                        <div 
                          className="w-6 h-6 rounded-full" 
                          style={{ backgroundColor: theme.primary }}
                        ></div>
                        <div 
                          className="w-6 h-6 rounded-full" 
                          style={{ backgroundColor: theme.secondary }}
                        ></div>
                        <div 
                          className="w-6 h-6 rounded-full" 
                          style={{ backgroundColor: theme.accent }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="layout">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PanelLeft className="h-5 w-5" />
                  Navigation Layout
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="navPosition">Navigation Position</Label>
                    <Select id="navPosition">
                      <option value="top">Top Navigation</option>
                      <option value="left">Left Sidebar</option>
                      <option value="both">Both (Top and Side)</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="sidebarCollapsible">Sidebar Behavior</Label>
                    <Select id="sidebarCollapsible">
                      <option value="fixed">Fixed (Always Visible)</option>
                      <option value="collapsible">Collapsible</option>
                      <option value="responsive">Responsive (Auto-collapse on Small Screens)</option>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="compactLayout" />
                    <Label htmlFor="compactLayout">Use Compact Layout</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Logo Positioning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="logoPosition">Logo Position</Label>
                    <Select 
                      id="logoPosition" 
                      value={logoPosition}
                      onChange={(e) => setLogoPosition(e.target.value)}
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="logoSize">Logo Size</Label>
                    <Select id="logoSize">
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="showLogoOnMobile" defaultChecked />
                    <Label htmlFor="showLogoOnMobile">Show Logo on Mobile</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="branding">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Brand Identity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="platformName">Platform Name</Label>
                    <Input id="platformName" placeholder="My Learning Management System" />
                  </div>

                  <div>
                    <Label htmlFor="logoUpload">Upload Logo</Label>
                    <Input id="logoUpload" type="file" accept="image/*" />
                    <p className="text-xs text-gray-500 mt-1">Recommended size: 240x80px, PNG or SVG format</p>
                  </div>

                  <div>
                    <Label htmlFor="faviconUpload">Upload Favicon</Label>
                    <Input id="faviconUpload" type="file" accept="image/*" />
                    <p className="text-xs text-gray-500 mt-1">Recommended size: 32x32px, ICO or PNG format</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Login & Registration Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="loginBgImage">Login Background Image</Label>
                    <Input id="loginBgImage" type="file" accept="image/*" />
                    <p className="text-xs text-gray-500 mt-1">Recommended size: 1920x1080px</p>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="showLogo" defaultChecked />
                    <Label htmlFor="showLogo">Show Logo on Login Page</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="customLoginForm" defaultChecked />
                    <Label htmlFor="customLoginForm">Use Branded Login Form</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="localization">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Regional Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="defaultLanguage">Default Language</Label>
                    <Select id="defaultLanguage">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="hi">Hindi</option>
                      <option value="ja">Japanese</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="defaultTimezone">Default Timezone</Label>
                    <Select id="defaultTimezone">
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="IST">IST (Indian Standard Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select id="dateFormat">
                      <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY (UK, Europe)</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Languages & Translation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="allowLanguageSelection" defaultChecked />
                    <Label htmlFor="allowLanguageSelection">Allow Users to Select Language</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="autoDetectLanguage" defaultChecked />
                    <Label htmlFor="autoDetectLanguage">Auto-detect User Language</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="translateContent" />
                    <Label htmlFor="translateContent">Auto-translate Course Content</Label>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      <FileJson className="h-4 w-4 mr-2" />
                      Import Translation File
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="email">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="emailTemplate">Select Template to Edit</Label>
                    <Select id="emailTemplate">
                      <option value="welcome">Welcome Email</option>
                      <option value="password-reset">Password Reset</option>
                      <option value="course-enrollment">Course Enrollment</option>
                      <option value="certificate">Certificate Completion</option>
                      <option value="payment-receipt">Payment Receipt</option>
                      <option value="notification">Notification</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="emailSubject">Email Subject</Label>
                    <Input id="emailSubject" placeholder="Welcome to [Institute Name]" />
                  </div>

                  <div>
                    <Label htmlFor="emailContent">Email Content</Label>
                    <textarea
                      id="emailContent"
                      rows={10}
                      className="w-full p-2 border rounded-md resize-y"
                      placeholder="Write your email content here..."
                      defaultValue="Dear {{name}},

Welcome to {{institute_name}}! We're excited to have you with us.

Your account has been successfully created, and you can now access all our learning resources.

Username: {{username}}
Get started by logging in at: {{login_url}}

If you have any questions, please don't hesitate to contact our support team.

Best regards,
The {{institute_name}} Team"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Use {'{{'} variable {'}}'} format for dynamic content</p>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <Button variant="outline">Preview</Button>
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Save Template</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Customization;