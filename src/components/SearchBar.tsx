import { useState } from "react";
import SubmitArrow from "../assets/images/icon-arrow.svg";
import getLocationData from "../utilities/getLocationData";

const SearchBar = () => {
  const [ipAddress, setIpAddress] = useState<string>("");

  const ipAddressRegex: RegExp =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gi;
  // This regular expression is used for validating IP addresses in dotted decimal notation. Here's a breakdown of the different parts:

  // ^ - The beginning of the string.
  // ((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.) - This is a capturing group that matches an IP address octet (a number between 0 and 255) followed by a period. It matches either:
  // 25[0-5] - A number between 250 and 255.
  // 2[0-4][0-9] - A number between 200 and 249.
  // [01]?[0-9][0-9]? - A number between 0 and 199. The [01]? part matches an optional 0 or 1, and the [0-9][0-9]? part matches one or two digits.
  // {3} - The previous capturing group should be matched exactly 3 times.
  // (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?) - This is another capturing group that matches the final octet of the IP address. It matches the same patterns as the previous group, but without the trailing period.
  // $ - The end of the string.

  const domainRegex: RegExp =
    /^[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
  // Here's a breakdown of the different parts:

  // ^ - The beginning of the string.
  // [a-zA-Z0-9]+ - One or more alphanumeric characters.
  // ([\-\.]{1}[a-zA-Z0-9]+)* - Zero or more occurrences of a hyphen or period followed by one or more alphanumeric characters. The backslash before the hyphen is used to escape it so that it is not interpreted as a range operator within the character class.
  // \. - A period. The backslash is used to escape the period so that it is not interpreted as a wildcard character.
  // [a-zA-Z]{2,} - Two or more alphabetic characters. This is the top-level domain (TLD), such as "com" or "net".
  // $ - The end of the string.

  const isValidAddress = async (address: string): Promise<boolean> => {
    if (!ipAddressRegex.test(address) && !domainRegex.test(address)) {
      return false;
    }

    const data = await getLocationData(ipAddress);
    setIpAddress(data?.ip);

    console.log(data);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    isValidAddress(ipAddress);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="ipAddress"
        id="ipAddress"
        placeholder="Search for any IP Address or Domain"
        required
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button type="submit">
        <img src={SubmitArrow} />
      </button>
    </form>
  );
};

export default SearchBar;
