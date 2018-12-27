Pod::Spec.new do |s|
  s.name         = "ipay88-sdk"
  s.version      = "1.0.2"
  s.summary      = "ipay88-sdk"
  s.description  = <<-DESC
                  RNIpay88Sdk
                   DESC
  s.homepage     = "https://github.com/myussufz/react-native-ipay88-sdk"
  s.license      = "MIT"
  s.author       = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNIpay88Sdk.git", :tag => "master" }

  s.source_files = "ios/iPay.h", "ios/IpayPayment.h", "ios/RNIpay88Sdk.h", "ios/RNIpay88Sdk.m"
  s.vendored_libraries = "ios/**/*.a"

  s.requires_arc = true

  s.dependency "React"
end
