package com.company.vendors.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.vendors.entities.Vendor;
import com.company.vendors.repositories.VendorRepository;


@RestController
@RequestMapping("/vendors")
public class VendorRestController {

	@Autowired
	VendorRepository vendorRepository;
	
	@GetMapping
	public List<Vendor> getLocation(){
		return vendorRepository.findAll();
	}
	
	@PostMapping
	public Vendor saveLocation(@RequestBody Vendor vendor) {
		return vendorRepository.save(vendor);
	}
	
	@PutMapping
	public Vendor updateLocation(@RequestBody Vendor vendor) {
		return vendorRepository.save(vendor);
	}
	
	@DeleteMapping("/{id}")
	public void deleteLocationById(@PathVariable("id") int id) {
		vendorRepository.deleteById(id);
	}
}
