import Link from 'next/link';
import Image from 'next/image';
import { getUserOrganizations } from '../data';

export const ProfileOrganizations = async ({ username }) => {

  return (
    <p>
      Presently working at{' '}
      <span className="mt-3 overflow-hidden">
        <span key={'Digital Sarthi'}>
          <Link
            target="_blank"
            href="https://www.digitalsarthi.ca"
            className="underline duration-500 hover:text-zinc-300"
          >
            <span className="text">Digital Sarthi</span>
            <Image
              className="ms-1 inline-block rounded-md"
              src="https://media.licdn.com/dms/image/C560BAQG9jY3a5Gol5g/company-logo_100_100/0/1632480138802/digital_sarthi_software_solutions_logo?e=1724284800&v=beta&t=U7bJ-c8-0YJfHxVmMV_6OWEMt5OVYs2oA-a70fU6Y5c"
              alt="Digital Sarthi"
              title="Digital Sarthi"
              width={24}
              height={24}
            />
          </Link>
        </span>
      </span>
    </p>
  );
};
