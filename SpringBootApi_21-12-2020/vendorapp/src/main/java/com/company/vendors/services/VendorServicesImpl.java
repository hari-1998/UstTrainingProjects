package com.company.vendors.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.vendors.entities.Vendor;
import com.company.vendors.repositories.VendorRepository;

@Service
public class VendorServicesImpl implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepository;

	@Override
	public Vendor saveVendor(Vendor vendor) {
		
		return vendorRepository.save(vendor);
	}

	@Override
	public Vendor updateVendor(Vendor vendor) {
		
		return vendorRepository.save(vendor);
	}

	@Override
	public void deleteVendor(Vendor vendor) {
		
		vendorRepository.delete(vendor);

	}

	@Override
	public Vendor getVendorId(int id) {
		
		return vendorRepository.findById(id).get();
	}

	@Override
	public List<Vendor> getAllVendors() {
		
		return vendorRepository.findAll();
	}

}
