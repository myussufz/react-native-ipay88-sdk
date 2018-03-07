
Pod::Spec.new do |s|
  s.name         = "RNIpay88Sdk"
  s.version      = "1.0.0"
  s.summary      = "RNIpay88Sdk"
  s.description  = <<-DESC
                  RNIpay88Sdk
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNIpay88Sdk.git", :tag => "master" }
  s.source_files  = "RNIpay88Sdk/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  